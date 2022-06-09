

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
        score=(adminObj.Activity_Mode[0]==="online")?handleScore(userData,adminObj,1):handleScore(userData,adminObj,0);
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
