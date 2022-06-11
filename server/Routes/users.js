const router = require('express').Router();
const User = require('../Model/User');
const Contacts = require('../Model/Contacts');

// route for posting the  user details to the database
router.post("/post-user-details",async(req,res) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json({"message":"succesfully signed up user"});
    }
    catch(err){
        console.log(err)
        res.status(500).json({"message":"encountered a server error"});
    }
})


// route for getting the userdetails based on the userid in params
router.get("/get-user-details/:uid",async(req,res) => {
    try{
            const user = await User.findOne({UserID:req.params.uid},{_id:0})
            if(user)
            {
                res.status(200).json(user);
            }
            else{
                res.status(404).json({"message":"user not found"})
            }
    }
    catch(err){
        console.log(err);
        res.status(500).json({"message":"encountered a server error"});
    }
})

// route for posting into the contact us schema
router.post("/post-contact-us",async(req,res) => {
    try{
        const new_contact_data = new Contacts(req.body);
        await new_contact_data.save();
        res.status(200).json({"message":"succesfully sent details to admin"})
    }
    catch(err){
        res.status(500).json({"message":"encountered a server error"})        
    }
})

// route for getting all the contact us details
router.get("/get-all-contact-us-messages",async(req,res) => {
    try{
        const contact_data = await Contacts.find({});
        res.status(200).json(contact_data);
    }
    catch(err){
        res.status(500).json({"message":"encountered a server error"});
    }
})

// route for getting single contact us details , params as message id
router.get("/get-contact-us-messages/:msgid",async(req,res) => {
    try{
        const contact_data = await Contacts.findById(req.params.msgid);
        res.status(200).json(contact_data);
    }
    catch(err){
        res.status(500).json({"message":"encountered a server error"});
    }
})



module.exports = router