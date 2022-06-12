const axios = require('axios');

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
        await axios.put(`http://localhost:8800/api/admin/mark-as-archive/${aid}`)

    }
    else{
        console.log("activity is still live");
    }
}


const getallactivies = async () => {
    const activity_data = await axios.get("http://localhost:8800/api/admin/list-all-activities");
    activity_data.data.map((i) => {
        compare_dates(i._id,i.ActivityDate);
    })
    console.log("cronjob check done")
}


module.exports = getallactivies;