const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jwt = require("jsonwebtoken");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    if (email === 'Shobhit' && password === 'abc') {
        jwt.sign({ _id: "12356" }, "thisisMylineaowebgdadivbasdsdfsdf", (err, token) => {
            if(err){
                res.sendStatus(404)
            }else{
                res.send("Welcome To Dash Board")
            }
        })
    }
    else{
        res.send("Invalid Credentials")
    }
})

app.listen(3000, function () {
    console.log("Server started at port 3000")
});