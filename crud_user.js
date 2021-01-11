const Sequelize = require('sequelize');
var express = require('express');
const sequelize = require('./connection');
const User = require('./user');
const { check, validationResult } = require("express-validator");
var router = express.Router();
router.post("/addUser",async function addUser(req,res,next){
    var u_id=req.body.id;
    var u_name=req.body.name;
    var u_age=req.body.age;
    var check = User.findByPk(u_id)
    await check.then((data,err)=>{
        if(err){
            var error = {
                is_error: true,
                message: err.message,
              };
              return res.status(500).send(error);
        }
        else if(data){
            var error = {
                is_error: true,
                message: "This Id Already Exists.",
              };
            return res.status(500).send(error);
        }
        else{
            var user= User.create({id:u_id, name:u_name, age:u_age});
            var finaldata = {
                is_error: false,
                message: "User Data created",
            };
            return res.status(200).send(finaldata);   
        }
    });
    
    
});
router.post("/updateUser",async function updateUser(req,res,next){
    var u_id=req.body.id;
    var u_name=req.body.name;
    var u_age=req.body.age;
    var check =User.findByPk(u_id)
    await check.then((data,err)=>{
        if(err){
            var error = {
                is_error: true,
                message: err.message,
              };
              return res.status(500).send(error);
        }
        else if(data){
            data.name=u_name;
            data.age=u_age;
            data.save();
            var finaldata = {
                is_error: false,
                message: "User Data Updated",
              };
            return res.status(200).send(finaldata);
        }
        else{
            data= User.create({id:u_id, name:u_name, age:u_age});
            data.save();
            var finaldata = {
                is_error: false,
                message: "User created",
            };
            return res.status(200).send(finaldata);   
        }
    });
    
    
});
router.get("/getUser",async function getUser(req,res,next){
    var check =User.findAll();
    await check.then((data,err)=>{
        if(err){
            var error = {
                is_error: true,
                message: err.message,
              };
              return res.status(500).send(error);
        }
        else if(data){
            
            var finaldata = {
                data:data,
                is_error: false,
                message: "User Data Fetched",
              };
            return res.status(200).send(finaldata);
        }
        
    });
    
    
});
router.post("/deleteUser",async function updateUser(req,res,next){
    var u_id=req.body.id;
    var u_name=req.body.name;
    var u_age=req.body.age;
    var check =User.findByPk(u_id)
    await check.then((data,err)=>{
        if(err){
            var error = {
                is_error: true,
                message: err.message,
              };
              return res.status(500).send(error);
        }
        else if(data){
            
            data.destroy();
            var finaldata = {
                is_error: false,
                message: "User Data Deleted",
              };
            return res.status(200).send(finaldata);
        }
        else{
            
            var error = {
                is_error: true,
                message: "Data not Found",
            };
            return res.status(500).send(error);   
        }
    });
    
    
});

module.exports= router;