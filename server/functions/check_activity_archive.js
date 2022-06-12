const axios = require('axios');
const Activity = require('../Model/Activity');
const Volunteers = require('../Model/Volunteers');
const { getNewVolunteer } = require('./getVolunteer');
const getBestActivitiesForUser = require('./mapper');

const convertToDate = (d) => {
    const [day, month, year] = d.split("/");
    return new Date(year, month - 1, day);
  }  

const compare_dates = async (aid,adate) => {
    // stuff for getting current date
    var today = new Date
    if(convertToDate(adate) < today)
    {
        // change status of isarchive as true for that activity
        console.log("archived the activity");
        await axios.put(`http://localhost:8800/api/admin/mark-as-archive/${aid}`);

        // unassign all the users in that activity (including the reccomendation schema too)
        await axios.put(`http://localhost:8800/api/admin/unassign-volunteer/${aid}`)

        // rerun the mapping function for all those unassigned users
        
   
    }
    else{
        console.log("activity is still live");
    }
}

const addReccomendation = async(volunteer,rec) => {
    const volunteerNeeded=await Volunteers.findOne({UserID:volunteer})
    volunteerNeeded.Volunteer_mapped+=1
    await volunteerNeeded.save();
    const volunteerName=volunteerNeeded.Volunteer_Name
    const ok = await Reccomendation.findOne({UserId:volunteer})
    const newRec = new Reccomendation({
        UserId:volunteer,
        Name:volunteerName,
        Reccomendation_ActivityID:newActivity._id.toString()
    })
    if(!ok)
    {
        await newRec.save();
        return ;
    }
    ok.Reccomendation_ActivityID.push(newActivity._id.toString())
    await ok.save();
}
const getallactivies = async () => {
    const activity_data = await axios.get("http://localhost:8800/api/admin/list-all-activities");
    activity_data.data.map((i) => {
        compare_dates(i._id,i.ActivityDate);
    })
    console.log("cronjob check done")
}


module.exports = getallactivies;