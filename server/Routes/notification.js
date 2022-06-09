const router = require('express').Router();
const Notification = require('../Model/Notification')


// route for posting the notification
router.post('/post-notification',async(req,res) => {
    try{
        const newNotification = new Notification(req.body)
        await newNotification.save();
        res.status(200).json({"message":"notification posted succesfully"});
    }
    catch(err){
        console.log(err)
        res.status(500).json({"message":"encountered a server error"});
    }
})

// route for getting the notification (in the order of latest notification on the top)
router.get('/get-all-notification',async(req,res) => {
    try{
        const notification = await Notification.find({}).sort({"createdAt":-1});
        res.status(200).json(notification)
    }
    catch(err){
        console.log(err);
        res.status(500).json({"message":"encountered a server error"});
    }
})


module.exports = router