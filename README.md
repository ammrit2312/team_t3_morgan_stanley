# team_t3_morgan_stanley

## Repo Structure
├── client
│   ├── Has the frontend code
│   ├── Dockerfile
├── server
│   ├── Has the backend code
└── README.md

## Tech Stack
| Name | Version |
| ----------- | ----------- | 
| ReactJS | Node v16.14.0 | 
| NodeJS | v16.14.0 |
| MongoDB | v3.6 |
| ExpressJS | |

## Setup
For setup please keep the following details in mind 
**Node version : v16.14.0
Follow the steps as listed below(make sure you are in the home of the repo)
```
cd client
npm i
npm run start
```
The above code will fire up the frontend (mostly on port 3000)

To run the backend(make sure you are in the home of the repo)
```
cd server
npm i
npm run start
```

## Team Members
| SNo. | Name | Github Id |
| ----------- | ----------- | ----------- | 
| 1 | Abhishek Mishra | [abhishek-pes](https://github.com/abhishek-pes) | 
| 2 | Amritesh | [ammrit2312](https://github.com/ammrit2312) | 
| 3 | Harshitha C | [Harshitha172](https://github.com/Harshitha172) | 
| 4 | Mayank Agrawal | [Mayank1403](https://github.com/Mayank1403) | 
| 5 | Raghav Tiruvallur | [Raghav-Tiruvallur](https://github.com/Raghav-Tiruvallur) |

**postman collection link updated today 12/06/2022 at 2:00 pm (below link)**

added a few more apis

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.postman.co/run-collection/403eb677cb9d024c741d?action=collection%2Fimport)


---------------------------------------------------------------------------------------------------
**Postman collection link for other apis updated**

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.postman.co/run-collection/403eb677cb9d024c741d?action=collection%2Fimport)


**Postman collection link for additional api's added on 10/06/2022 (below link)**

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.postman.co/run-collection/403eb677cb9d024c741d?action=collection%2Fimport)

## API Documnetation and use case

### Signup a user
  
For adding details of the user to mongoDb

assuming for account type 0 --> user and 1 --> admin

```
axios.post("http://localhost:8800/api/user/post-user-details",{
        UserID:userid,
        Email:email,
        AccountType:0
      }).then((res) => {
          console.log(res.data);
    })
```
postman collection link :

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.postman.co/run-collection/a71e6ff16a66c44b16b6?action=collection%2Fimport)

### Signin a user
gets complete user details if that particular user(userid) exists in the db

```
axios.get(`http://localhost:8800/api/user/get-user-details/${userid}`).then((res) => {
          console.log(res.data)
      })
```
userid goes as a url parameter

returns an object with complete user details if it exists or else return a ```{message: 'user not found'}```

postman collection link : 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.postman.co/run-collection/a71e6ff16a66c44b16b6?action=collection%2Fimport)
