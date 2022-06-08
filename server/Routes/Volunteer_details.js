const router = require('express').Router();
const Volunteers = require('../Model/Volunteers')
const Activity = require('../Model/Activity');
const Reccomendation = require('../Model/Reccomendation');

const getBestActivitiesForUser=require('../functions/mapper');
const getNewVolunteer=require('../functions/getVolunteer');
var userDict={};
var activityDict={};
// Route for submitting the volunteer form
router.post("/submit-volunteer/:uid",async(req,res) => {
    try{

        const newVolunteer = new Volunteers(req.body);    
        const volunteer = await newVolunteer.save();
        Activity.find({ $expr: { $lt: [ "$Current_assigned" , "$Max_volunteers" ] } },(err,activity)=>{
            if(!err)
            {
            const bestActivitiesIDs=getBestActivitiesForUser(userDict,volunteer,activity);
            console.log(volunteer.Volunteer_Name,bestActivitiesIDs)
            addReccomendation(volunteer,bestActivitiesIDs);
            res.status(200).json({"message":"succesfuly mapped volunteer"});
            }
        }) 
    }
    catch(err){
        console.log(err);
    }
})


// function to store the reccomendation in the database
const addReccomendation = async(volunteer,rec) => {
    const newRec = new Reccomendation({
            UserId:volunteer._id,
            Name:volunteer.Volunteer_Name,
            Reccomendation_ActivityID:rec
        })
        await newRec.save();
}

//Route for getting the reccomended activities on the volunteer side
router.get("/get-reccomended-activities/:userid",async (req,res)=> {
    let userid = req.params.userid
    try{
        const {Reccomendation_ActivityID,User_Activity_Select} = await Reccomendation.findOne({UserId:userid},{_id:0,Reccomendation_ActivityID:1,User_Activity_Select:1});

        if(!User_Activity_Select)
        {
                // calculating the uptime
                let current_time = new Date();
                const {createdAt} = await Reccomendation.findOne({UserId:req.params.userid},{_id:0,createdAt:1})
                total = current_time.getTime() - createdAt.getTime()
                const hours = (Math.floor((total)/1000))/3600;

                //here 5 is the number of hours after which the admin will chose the activity for the user (in case user dosen't prefer anythin)
                if(Math.round(hours) >= 5){
                    exceededUptime(Reccomendation_ActivityID,userid);
                    return res.json({"message":"uptime exceeded. Admin will assign you the activity"})
                }

                const reccomended_act = await Promise.all(
                Reccomendation_ActivityID.map((activityId) => {
                    return Activity.findById(activityId,{_id:1,ActivityName:1,Activity_Location:1,Language_Preference:1,Preffered_skills:1,Activity_availability:1,Activty_Description:1});
                })
            )
            res.status(200).json(reccomended_act)
        }
        else{
            res.json({"message":"User already selected activity"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500);
    }
})

// function to add the activities from prefered list if it exceeds uptime
const exceededUptime = async(activity_ids,uid) => {
   await Reccomendation.findOneAndUpdate({UserId:uid},{ $push : {"UserPreferred_Activity": {$each:activity_ids} }});
}
//route for adding user to Users collection
//modify
router.get("/checkExists/:userID",async(req,res)=>{
    try
    {
        let username=req.params.userID
        const data=await Users.find({Volunteer_Username:username})
        if(data.length > 0)
        {
            res.status(200).json({"message":data});
        }
        else
        {
            res.status(404).json({"message":"Not found"});
        }
    }
    catch(e)
    {
        console.log(e)
        res.status(500).json({"message":e});
    }
})

//to add preferred activities
router.get("/addpreferredactivity/:userid/:pactivityid",async(req,res)=>{
    try
    {
        let userid=req.params.userid
        let pactivityid=req.params.pactivityid
        const add = Reccomendation.findOneAndUpdate({UserId:userid},{ $push : {"UserPreferred_Activity": { newItem: pactivityid } }});
        await add.save();
    }
    catch(err)
    {
        console.log(err);
    }
})


router.put("/opt-out/:uID/:actID",async(req,res)=>{
    try{
        let userID=req.params.uID;
        let activityID=req.params.actID;
        const data=await Activity.updateOne({_id:activityID},{$pull:{AssignedTo:userID},$inc:{Current_assigned : -1}});
        await Volunteers.updateOne({_id:userID},{assigned:false});
        if(data.modifiedCount)
            res.status(200).json({"message":"Opted out successfully"})
        else
            res.status(500).json({"message":"Opt out unsucessful"});
    }
    catch(e)
    {
        console.log(e);
        res.status(500).json({"message":e});
    }
});

router.put("/get-new-user/:actID",async(req,res)=>{
    try{
        let activityID=req.params.actID
        let actObj=await Activity.findOne({_id:activityID})
        let users=await Volunteers.find({assigned:false})
        let userID=getNewVolunteer(activityDict,actObj,users);
        console.log(userID)
        if(userID===undefined)
        {
            res.status(500).json({"message":"No such user present"});
        }
        else
        {
            const x=await Reccomendation.updateOne({userId:userID},{$push:{Reccomendation_ActivityID:activityID}});
            console.log(x)
            await Activity.updateOne({_id:activityID},{$push:{AssignedTo:userID}});
            await Volunteers.updateOne({_id:userID},{assigned:true})
            res.status(200).json({"message":"New Volunteer mapping recommended"});
        }

    }
    catch(e)
    {
        console.log(e)
        res.status(500).json({"message":e});
    }
})
//How it works now:
//Volunteer opts out by a button => fires backend request => backend removes his assignment => send response "he is removed"
//Frontend send another request to backend to get new volunteer for this activity => backend finds new user for this activity 
//=> if present backend queries the Recommendation db and pushes the activityID for the userID => volunteer is updated of this
// by refreshing the page because he keeps querying the recommendation db on every page reload. Admin is also updated on page 
// reload because he too queries recommendation db on page reload.          


//Broadcast schema and post to this=>name of the activity => broadcast it in the forum tab



module.exports = router