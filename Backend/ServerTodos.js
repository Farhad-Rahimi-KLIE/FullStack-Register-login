const express = require("express");
const mongoose = require("mongoose");
const Config = require("./Config");
const User = require("./Users");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    User.findOne({email : email}).
    then(user => {
        if (user) {
            if (user.password === password) {
                res.json("Success")
            }else{
                res.json("the Password is Wrong")
            }
        }else{
            res.json("No Record is Existed")
        }
    })
})

app.post('/register', (req, res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    User.create({
        name : name,
        email : email,
        password : password
    }).then(result => res.json(result)).catch(err => res.json(err))
})

app.listen(3000);