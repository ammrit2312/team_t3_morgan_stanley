
const getNewVolunteer=(activityDict,activityObject,users)=>{
    let id=activityObject._id.toString();
    getMatchScoreForActivity(id,activityDict,userObject,users);
    var keys=Object.keys(activityDict[id]);
    largest = Math.max(...keys.map(x => activityDict[id][x]));
    keys=keys.reduce((result, key) => { if (activityDict[id][key] === largest){ result.push(key); } return result; }, []);
    return keys[0];
}
