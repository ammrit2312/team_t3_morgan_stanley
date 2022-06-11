const getBareReqScore=(userData,admin,mode)=>{
    let score=0;
    if (containsAll(admin.Language_Preference,userData.Volunteer_Languages))
    {
        score += 10 + 2.5*mode;
    }
    if (containsAll(admin.Activity_availability,userData.Volunteer_Availability))
    {
        score += 10 + 2.5*mode;
    }
    if (containsAll(admin.ActivityType,userData.Volunteer_Interested_Activity_Type))
    {
        score += 10 + 2.5*mode;
    }
    if(userData.Volunteer_Preferred_Mode.includes(admin.Activity_Mode))
    {
        score+=10 + 2.5*mode;
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

const handleScore=(userData,adminObj,mode)=>{
    return getBareReqScore(userData,adminObj,mode) + checkPreferedSkill(userData.Volunteer_Skills,adminObj.Preferred_skills);
    
}

const getMatchScoreForUser=(userID,userDict,userData,admin)=>{
    
    //bare requirements has a weight of 10
    userDict[userID]={};
    admin.forEach((adminObj)=>{
        let score = 0;
        let activityID=adminObj._id.toString();
        score=(adminObj.Activity_Mode==="online")?handleScore(userData,adminObj,1):handleScore(userData,adminObj,0);
        userDict[userID][activityID]=score;
    });

}
const getBestActivitiesForUser=(userDict,userObject,adminReq)=>{
    
    let id=userObject._id.toString();
    getMatchScoreForUser(id,userDict,userObject,adminReq);
    var keys=Object.keys(userDict[id]);
    largest = Math.max(...keys.map(x => userDict[id][x]));
    keys=keys.reduce((result, key) => { if (userDict[id][key] === largest){ result.push(key); } return result; }, []);
    return keys;
}

module.exports=getBestActivitiesForUser;