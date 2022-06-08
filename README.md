# team_t3_morgan_stanley

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
