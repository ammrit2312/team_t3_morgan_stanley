const router = require('express').Router();
const Volunteers = require('../Model/Volunteers')
const Activity = require('../Model/Activity');
const Reccomendation = require('../Model/Reccomendation');
const User = require('../Model/User');

const getBestActivitiesForUser=require('../functions/mapper');
const getNewVolunteer=require('../functions/getVolunteer');

var userDict={};
var activityDict={};

// Route for submitting the volunteer form
router.post("/submit-volunteer/:uid",async(req,res) => {
    try{
        req.body["UserID"] = req.params.uid
        const newVolunteer = new Volunteers(req.body);    
        const volunteer = await newVolunteer.save();
        filledForm(req.params.uid)
        Activity.find({ $expr: { $lt: [ "$Current_assigned" , "$Max_volunteers" ] } },async(err,activity)=>{
            if(!err)
            {
            const bestActivitiesIDs=getBestActivitiesForUser(userDict,volunteer,activity);
            console.log(volunteer.Volunteer_Name,bestActivitiesIDs)
            volunteer.Volunteer_mapped+=bestActivitiesIDs.length
            await volunteer.save()
            addReccomendation(volunteer,bestActivitiesIDs);
            res.status(200).json({"message":"successfully mapped volunteer"});
            }
            else{
                res.json({"message":"the activity max capacity is filled"})
            }
        }) 
    }
    catch(err){
        console.log(err);
        res.status(500).json({"message":"encountered a server error"});
    }
})

// Route for updating the volunteer profile
router.post("/update-volunteer-profile/:uid",async(req,res) => {
    try{
        uid=req.params.uid
        req.body["UserID"] = uid
        updates=req.body
        const data=await Volunteers.find({UserID:uid})
        if(data.length > 0)
        {
            const update_volunteer=Volunteers.findOneAndUpdate({UserID:uid},{updates})
            const update = await update_volunteer.save();
            res.status(200).json({"message":"Profile updated successfully"});
        }
        else
        {
            res.status(404).json({"message":"Volunteer does not exist"});
        } 
    }
    catch(err){
        console.log(err);
        res.status(500).json({"message":"encountered a server error"});
    }
})

// function for updating the filled form attribute in user-schema to ensure volunteer has filled form before assigning activities
const filledForm = async(uid) => {
    await User.updateOne({UserID:uid},{Filled_Form:true})
}



// function to store the reccomendation in the database
const addReccomendation = async(volunteer,rec) => {
    const newRec = new Reccomendation({
            UserId:volunteer.UserID,
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
                // if(Math.round(hours) >= 5){
                //     exceededUptime(Reccomendation_ActivityID,userid);
                //     return res.json({"message":"uptime exceeded. Admin will assign you the activity"})
                // }

                const reccomended_act = await Promise.all(
                Reccomendation_ActivityID.map((activityId) => {
                    return Activity.findById(activityId,{_id:1,ActivityName:1,Activity_Location:1,Language_Preference:1,Preffered_skills:1,ActivityType:1,Activity_availability:1,Activity_Mode:1,Activity_Description:1,ActivityDate:1,ActivityTime:1,ActivityDurationInMinutes:1});
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
        res.status(500).json({"message":"encountered a server error"});
    }
})

// function to add the activities from prefered list if it exceeds uptime
const exceededUptime = async(activity_ids,uid) => {
   await Reccomendation.findOneAndUpdate({UserId:uid},{ $push : {"UserPreferred_Activity": {$each:activity_ids} }});
}


//api to check if the username exists in the database
router.get("/checkExists/:userID",async(req,res)=>{
    try
    {
        let username=req.params.userID
        const data=await User.find({Volunteer_Username:username})
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
        res.status(500).json({"message":"encountered a server error"});
    }
})

//get all upcoming activity details that admin has approved in volunteer side
router.get("/upcoming-activities/:userID",async(req,res)=>{
    try
    {
        let userid=req.params.userID
        const {Upcoming_Activities} = await Volunteers.findOne({UserID:userid},{Upcoming_Activities:1});
        console.log(Upcoming_Activities)
        if(Upcoming_Activities.length > 0)
        {
            const return_act = await Promise.all(
                Upcoming_Activities.map((activityId) => {
                    return Activity.findById(activityId,{_id:1,ActivityName:1,ActivityTime:1,Activity_Mode:1});
                }))
            res.status(200).json(return_act)
        }
        else{
            res.status(200).json({"message":"no upcoming activities found"});
        }
        
    }
    catch(e)
    {
        console.log(e)
        res.status(500).json({"message":"encountered a server error"});
    }
})

//route to push activityid to preferred activities from the reccomended activity after volunteer selects it 
//pushes activity id to UserPreferred_Activity
//pushes the userid in Preferred_Users in the activity schema
router.put("/addpreferredactivity/:userid/:pactivityid",async(req,res)=>{
    try
    {
        let userid=req.params.userid
        let pactivityid=req.params.pactivityid
        const add = await Reccomendation.findOneAndUpdate({UserId:userid},{ $addToSet : {"UserPreferred_Activity": pactivityid}});

        //pushing userid in the Preferred_Users in the activity schema
        await Activity.findOneAndUpdate({_id:pactivityid},{$addToSet:{"Preferred_Users":userid}})

        // await add.save();
        res.json({"message":"added to preffered list"});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({"message":"encountered a server error"});
    }
})

//route to opt out of the confirmed activity from the volunteer side
//removes user id from AssignedTo list in activity schema
//decrements Current_assigned (number of volunteers asigned to ativity)
//increments Volunteer_Number_Of_Activities_Opted_Out
router.put("/opt-out/:uID/:actID",async(req,res)=>{
    try{
        let userID=req.params.uID;
        let activityID=req.params.actID;
        const data=await Activity.updateOne({_id:activityID},{$pull:{AssignedTo:userID},$inc:{Current_assigned : -1}});
        const updates=await Volunteers.updateOne({_id:userID},{$inc:{Volunteer_Number_Of_Activities_Opted_Out : 1}});
        await Volunteers.updateOne({_id:userID},{assigned:false});
        if(data.modifiedCount)
            res.status(200).json({"message":"Opted out successfully"})
        else
            res.status(500).json({"message":"Opt out unsucessful"});
    }
    catch(e)
    {
        console.log(e);
        res.status(500).json({"message":"encountered a server error"});
    }
});

//route for rejecting reccomended activities from volunteer side
// removes activity id from the Reccomendation_ActivityID for the user
router.put("/reject-activity/:uID/:actID",async(req,res)=>{
    try{
        let userID=req.params.uID;
        let activityID=req.params.actID;
        const data=await Reccomendation.updateOne({UserId:userID},{$pull:{Reccomendation_ActivityID:activityID}});
        if(data.modifiedCount)
            res.status(200).json({"message":"Rejected successfully"})
        else
            res.status(200).json({"message":"Rejection unsuccessful"});
    }
    catch(e)
    {
        console.log(e);
        res.status(500).json({"message":"encountered a server error"});
    }
});

//route for getting new volunteer for the activity after volunteer opts out
router.put("/get-new-user/:actID",async(req,res)=>{
    try{
        let activityID=req.params.actID
        let actObj=await Activity.findOne({_id:activityID})
        let users=await Volunteers.find({assigned:false})
        let userID=getNewVolunteer(activityDict,actObj,users);
        if(userID===undefined)
        {
            res.status(500).json({"message":"No such user present"});
        }
        else
        {
            const x=Reccomendation.updateOne({userId:userID},{$push:{Reccomendation_ActivityID:activityID}});
            const z=Volunteers.updateOne({userID:userID},{$inc:{Volunteer_mapped:1}})

            await Promise.all([x,z])
            res.status(200).json({"message":"New Volunteer mapping recommended"});
        }

    }
    catch(e)
    {
        console.log(e)
        res.status(500).json({"message":"encountered a server error"});
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