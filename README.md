# team_t3_morgan_stanley

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
