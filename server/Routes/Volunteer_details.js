const router = require('express').Router();
const Volunteers = require('../Model/Volunteers')
const getBestActivitiesForUser=require('../test_Scripts/dummy_data');
// const getAllActivities =require('../Routes/admin');
const Activity = require('../Model/Activity');

var userDict={};



router.post("/submit-volunteer",async(req,res) => {
    let activities=[]
    try{

        const newVolunteer = new Volunteers(req.body);    
        const volunteer = await newVolunteer.save();
       
        Activity.find({},(err,activity)=>{
            if(!err)
            {
            const bestActivitiesIDs=getBestActivitiesForUser(userDict,volunteer,activity);
            bestActivitiesIDs.forEach((id)=>{
                Activity.findOne({_id:id},(err,act)=>{
                    if(!err)
                    {
                        console.log(act.ActivityName)
                        activities.push(act.ActivityName)
                    }
                }
                )
            })
            console.log(volunteer.Volunteer_Name,activities)
            res.status(200).json(activities);
            }
        })
        
      
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router