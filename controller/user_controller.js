const user = require('../Models/user');
const Sequelize = require('sequelize');
const sequelize = require('./../connection');
const validator = require('./user_validator');

const { check, validationResult } = require("express-validator");
const User = require('../Models/user');
const addUser = async(req,res,next) =>{
    try{
        let id= req.body.id;
        let name= req.body.name;
        let age= req.body.age;
        try{
            const val_check= await validator.validateAsync({name:name,age:age})
        }
        catch(err){
            return res.send(err.details[0].message)
        }
        var check=await User.findByPk(id);
        if(check){
            var error = {
                is_error: true,
                message: "This Id Already Exists.",
            };
            return res.status(500).send(error);
        }
        else{
            var user= User.create({id:id, name:name, age:age});
                var finaldata = {
                    is_error: false,
                    message: "User Data created",
                };
            return res.status(200).send(finaldata); 
        }
    }
    catch(err){
        if(err){
            var error = {
                is_error: true,
                message: err.message,
            };
            return res.status(500).send(error);
        }
    }
}

const updateUser = async(req,res,next) =>{
    try{
        let id= req.body.id;
        let name= req.body.name;
        let age= req.body.age;
        try{
            const val_check= await validator.validateAsync({name:name,age:age})
        }
        catch(err){
            return res.send(err.details[0].message)
        }
        var check=await User.findByPk(id);
        if(check){
            data.name=name;
            data.age=age;
            data.save();
            var finaldata = {
                is_error: false,
                message: "User Data Updated",
              };
            return res.status(200).send(finaldata);
        }
        else{
            var user= User.create({id:id, name:name, age:age});
                var finaldata = {
                    is_error: false,
                    message: "Existing data not found!  Created New Instance",
                };
            return res.status(200).send(finaldata); 
        }
    }
    catch(err){
        if(err){
            var error = {
                is_error: true,
                message: err.message,
            };
            return res.status(500).send(error);
        }
    }
}
const deleteUser = async(req,res,next) =>{
    try{
        let id= req.body.id;
        let name= req.body.name;
        let age= req.body.age;
        try{
            const val_check= await validator.validateAsync({name:name,age:age})
        }
        catch(err){
            return res.send(err.details[0].message)
        }
        var check=await User.findByPk(id);
        if(check){
            check.destroy();
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
            return res.status(404).send(error); 
        }
    }
    catch(err){
        if(err){
            var error = {
                is_error: true,
                message: err.message,
            };
            return res.status(500).send(error);
        }
    }
}
const getUser = async(req,res,next) =>{
    try{
        
        var check=await User.findAll();
        if(check){
            var finaldata = {
                data: check,
                is_error: false,
                message: "User Data Fetched",
            };
            return res.status(200).send(finaldata);
        }
        
    }
    catch(err){
        if(err){
            var error = {
                is_error: true,
                message: err.message,
            };
            return res.status(500).send(error);
        }
    }
}

module.exports={addUser,updateUser,deleteUser,getUser}