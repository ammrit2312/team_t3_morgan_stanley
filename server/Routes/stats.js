const router = require('express').Router();
const Activity = require('../Model/Activity');
const Reccomendation = require('../Model/Reccomendation');
const Volunteers = require('../Model/Volunteers');



router.get("/get-platform",async(req,res) => {
    try {
        const data = await Volunteers.find({},{_id:0,Volunteer_Platform:1})
        console.log(data);
        let arr = []
        data.map((i) => {
            if((i.Volunteer_Platform).length > 0)
            {
                arr = arr.concat(i.Volunteer_Platform);
            }
        })
        stats_data = map_stats_platform(arr);
        res.status(200).json(stats_data);
    } catch (err) {
        console.log(err);
        res.status(500).json({"message":"encountered a server error"});
    }
})

// function for getting the platform and its count
const map_stats_platform = (arr) => {

    // this dictionary remains unchanged since the platform is limited
    const platform_dict = {"Social Media":0,"Friends":0,"Exhibitions":0,"Through a sentsitization session":0,"Through Media":0,"Through the Volunteer Calendar":0}
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] == "Social Media")
        {
            platform_dict["Social Media"] +=1;
        }
        if(arr[i] == "Friends")
        {
            platform_dict["Friends"] +=1;
        }
        if(arr[i] == "Exhibitions")
        {
            platform_dict["Exhibitions"] +=1;
        }
        if(arr[i] == "Through a sentsitization session")
        {
            platform_dict["Through a sentsitization session"] +=1;
        }
        if(arr[i] == "Through Media")
        {
            platform_dict["Through Media"] +=1;
        }
        if(arr[i] == "Through the Volunteer Calendar")
        {
            platform_dict["Through the Volunteer Calendar"] +=1;
        }
    }
    return {x:Object.keys(platform_dict),y:Object.values(platform_dict)}

}


// function for getting the activities registered and its count
const map_stats_activity = (arr) => {
    const dict={};
    for(let i=0;i<arr.length;i++)
    {
        attr=(arr[i])
        if(attr in dict){
            dict[attr] +=1;
        }
        else{
            dict[attr] =1
        }
    }
    return {x:Object.keys(dict),y:Object.values(dict)}
}

//route to get stats for activity type preferred by volunteers
router.get("/get-activity-stats",async(req,res) => {
    try {
        const data = await Volunteers.find({},{_id:0,Volunteer_Interested_Activity_Type:1})
        let array = []
        data.map((i) => {
            if((i.Volunteer_Interested_Activity_Type).length > 0)
            {
                array = array.concat(i.Volunteer_Interested_Activity_Type);
            }
        })
        stats_data = map_stats_activity(arr);
        res.status(200).json(stats_data);
    } catch (err) {
        console.log(err);
        res.status(500).json({"message":"encountered a server error"});
    }
})




module.exports = router;