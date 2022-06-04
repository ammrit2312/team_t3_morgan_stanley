const router = require('express').Router();
const Volunteer = require('../Model/Volunteers')

router.post("/submit-volunteer",async (req,res) => {
    try{

        const newVolunteer = new Volunteer(req.body);    
        const volunteer = await newVolunteer.save();
        res.status(200).json(volunteer);
    
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router