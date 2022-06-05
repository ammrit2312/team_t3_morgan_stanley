const router = require('express').Router();
const Volunteers = require('../Model/Volunteers')
const Activity = require('../Model/Activity');
const Reccomendation = require('../Model/Reccomendation');

const getBestActivitiesForUser=require('../functions/mapper');

var userDict={};


// Route for submitting the volunteer form
router.post("/submit-volunteer",async(req,res) => {
    let activities=[]
    try{

        const newVolunteer = new Volunteers(req.body);    
        const volunteer = await newVolunteer.save();
       
        Activity.find({},(err,activity)=>{
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
router.get("/get-reccomended-activities",async (req,res)=> {
    let activitity_rec_arr = []
    try{
        const {Reccomendation_ActivityID} = await Reccomendation.findOne({UserId:req.body.userid},{_id:0,Reccomendation_ActivityID:1});
        
        const reccomended_act = await Promise.all(
            Reccomendation_ActivityID.map((activityId) => {
                return Activity.findById(activityId,{_id:1,ActivityName:1,Activity_Location:1,Language_Preference:1,Preffered_skills:1,Activity_availability:1,Activty_Description:1});
            })
        )
        res.status(200).json(reccomended_act)
    }
    catch(err){
        console.log(err);
        res.status(500);
    }
})


module.exports = router