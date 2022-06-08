const router = require('express').Router();
const User = require('../Model/User');

// route for posting the  user details to the database
router.post("/post-user-details",async(req,res) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json({"message":"succesfully signed up user"});
    }
    catch(err){
        console.log(err)
        res.status(500).json({"message":err});
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
                res.json({"message":"user not found"})
            }
    }
    catch(err){
        console.log(err);
        res.status(500).json({"message":err});
    }
})


module.exports = router