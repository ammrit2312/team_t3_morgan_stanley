const getBareReqScore=(userData,admin,mode)=>{
    let score=0;
    if (containsAll(admin.Language_Preference,userData.Volunteer_Languages))
        {
            score += 10 + 5*mode;
        }
    if (containsAll(admin.Activity_availability,userData.Volunteer_Availability))
        {
            score += 10 + 5*mode;
        }
    if (containsAll(admin.ActivityType,userData.Volunteer_Interested_Activity_Type))
        {
            score += 10;
        }
    if (containsAll(admin.Activity_Mode,userData.Volunteer_Preferred_Mode))
        {
            score += 10;
        }
    if (mode===0 && containsAll(admin.Activity_Location,userData.Volunteer_Preferred_Locations))
        {
            score += 10;
        }
        return score;
}

const containsAll =(arr1,arr2)=> {
    const result = arr1.every(element => arr2.includes(element));
    return result;
  };
  
const checkPreferedSkill = (arr1,arr2) => {
    let boost_score = 0;
    const filteredArray = arr1.filter(value => arr2.includes(value));
    boost_score = filteredArray.length;
    return boost_score;
}

const handleScore=(adminObj,userData,mode)=>{
    return getBareReqScore(userData,adminObj,mode) + checkPreferedSkill(userData.Volunteer_Skills,adminObj.Preferred_skills);
    
}

const getMatchScoreForActivity=(activityID,activityDict,activityData,users)=>{
    
    //bare requirements has a weight of 10
    activityDict[activityID]={};
    users.forEach((userObj)=>{
        let score = 0;
        let userID=userObj._id.toString();
        score=(activityData.Activity_Mode[0]==="online")?handleScore(activityData,userObj,1):handleScore(activityData,userObj,0);
        activityDict[activityID][userID]=score;
    });

}
const getNewVolunteer=(activityDict,activityObject,users)=>{
    let id=activityObject._id.toString();
    getMatchScoreForActivity(id,activityDict,activityObject,users);
    var keys=Object.keys(activityDict[id]);
    largest = Math.max(...keys.map(x => activityDict[id][x]));
    keys=keys.reduce((result, key) => { if (activityDict[id][key] === largest){ result.push(key); } return result; }, []);
    return keys[0];
}
module.exports=getNewVolunteer;