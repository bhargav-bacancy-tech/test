var express = require('express');
const Sequelize = require('sequelize');
const seuelize =require('./connection');
const User = seuelize.define('users',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,

    }
});
app.get('/data',function(req,res){
    const users = await testtab1.findAll();
    console.log(users.every(user => user instanceof User)); // true
    console.log("All users:", JSON.stringify(users, null, 2));
});