const router = require('express').Router();
const Activity = require('../Model/Activity')

router.post("/submit-activity",async (req,res) => {
    try{

        const newActivity = new Activity(req.body);    
        const activtity = await newActivity.save();
        res.status(200).json(activtity);
    
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router