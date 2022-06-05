// const user =[{
//     id:new Object("xyz"),
//     name:'user1',
//     language_preference:['english','tamil'],
//     availability:['weekend','weekday'],
//     preferred_volunteer:['on-ground'],
//     location:['outside mumbai'],
//     skills : ['playing' , 'teaching' , 'story telling']
//     },
//     {
//         id:new Object("abc"),
//         name:'user2',
//         language_preference:['hindi'],
//         availability:['weekend'],
//         preferred_volunteer:['on-ground'],
//         location:['navi mumbai'],
//         skills : ['playing' , 'teaching']
//     },
//     {
//         id:new Object("mnh"),
//         name:'user3',
//         language_preference:['hindi'],
//         availability:['weekend'],
//         preferred_volunteer:['on-ground'],
//         location:['navu mumbai'],
//         skills : ['playing' , 'teaching']
//     }

// ]
// const adminReq=[{
//     id:new Object("pow"),
//     volunteering_type:['on-ground'],
//     mode:"on-ground",
//     activity_name:['story-telling'],
//     activity_category:['play2learn'],
//     language_preference:['tamil'],
//     preffered_skill:['story telling'],
//     availability :['weekend'],
//     location: ['navi mumbai']
// },
// {
//     id:new Object("lki"),
//     mode:"online",
//     volunteering_type:['online'],
//     activity_name:['coding'],
//     activity_category:['play2learn'],
//     language_preference:['marathi'],
//     preffered_skill:['logical thinking'],
//     availability :['weekend'],
//     location: ['outside mumbai']
// }]


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
        let id=adminObj._id.toString();
        score=(adminObj.Activity_Mode[0]==="online")?handleScore(userData,adminObj,1):handleScore(userData,adminObj,0);
        userDict[userID][id]=score;
      
    });

}
const getBestActivitiesForUser=(userDict,userObject,adminReq)=>{
    
    let id=userObject._id.toString();
    getMatchScoreForUser(id,userDict,userObject,adminReq);
    console.log("hello from")
    var keys=Object.keys(userDict[id]);
    largest = Math.max(...keys.map(x => userDict[id][x]));
    keys=keys.reduce((result, key) => { if (userDict[id][key] === largest){ result.push(key); } return result; }, []);
    return keys;
}

module.exports=getBestActivitiesForUser;

//TODO:
//Take care of capacity