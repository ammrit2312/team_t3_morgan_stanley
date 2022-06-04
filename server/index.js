const express = require('express');
const app = express();

//middlewares
app.use(express.json())


app.get('/', (req,res) => {
    res.send("hello world");
})


app.listen(8800,() => {
    console.log("backend running");
})