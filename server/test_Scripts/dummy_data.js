const user =[{
    name:'user1',
    language_preference:['english','tamil'],
    availability:['weekend','weekday'],
    preferred_volunteer:['on-ground'],
    location:['outside mumbai'],
    skills : ['playing' , 'teaching' , 'story telling']
    },
    {
        name:'user2',
        language_preference:['hindi'],
        availability:['weekend'],
        preferred_volunteer:['on-ground'],
        location:['navi mumbai'],
        skills : ['playing' , 'teaching']
    },
    {
        name:'user3',
        language_preference:['hindi'],
        availability:['weekend'],
        preferred_volunteer:['on-ground'],
        location:['navu mumbai'],
        skills : ['playing' , 'teaching']
    }

]
const adminReq=[{
    volunteering_type:['on-ground'],
    activity_name:['story-telling'],
    activity_category:['play2learn'],
    language_preference:['tamil'],
    preffered_skill:['story telling'],
    availability :['weekend'],
    location: ['navi mumbai']
},
{
    volunteering_type:['online'],
    activity_name:['coding'],
    activity_category:['play2learn'],
    language_preference:['marathi'],
    preffered_skill:['logical thinking'],
    availability :['weekend'],
    location: ['outside mumbai']
}]

var userDict = [];

const getBareReqScore=(userData,admin)=>{
    let score=0;
    if (containsAll(admin.language_preference,userData.language_preference))
        {
            score += 10;
        }
        if (containsAll(admin.availability,userData.availability))
        {
            score += 10;
        }
        if (containsAll(admin.location,userData.location))
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
const getMatchScoreForUser=(userID,userData,admin)=>{
    const bare_Req = ['language_preference','availabilty','location']
    
    //bare requirements has a weight of 10
    
    for(let i = 0 ; i<admin.length ; i++)
    {
        //console.log(admin[i].language_preference)
        let score = 0;
        // console.log(containsAll(,[1,2,3,4]))
        //matching condtion for bare requirements
        score+=getBareReqScore(userData,admin[i]);
        score+=checkPreferedSkill(userData.skills,admin[i].preffered_skill);
        userDict[userData.name][i]=score;
        console.log(userData.name,score,admin[i].activity_name);
    }
    //console.log(score);
    //return score;
}
function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}
for(let i=0;i<user.length;i++)
{
    getMatchScoreForUser(i,user[i],adminReq);
    sortedUserData=userDict[i];
    sortedUserData.sort((a,b)=>b-a);
    //find index of these scores in userDict[i]
    indices=getAllIndexes(sortedUserData,sortedUserData[0]);
    //[0,1,2]
    
    
}