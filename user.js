var express = require('express');
const sequelize = require('sequelize');
const conn =require('./connection');
app.get('/data',function(req,res){
    const users = await testtab1.findAll();
    console.log(users.every(user => user instanceof User)); // true
    console.log("All users:", JSON.stringify(users, null, 2));
});