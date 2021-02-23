var express = require('express');
const Sequelize = require('sequelize');
const seuelize =require('../connection');
const User = seuelize.define('users',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type:Sequelize.INTEGER,
        allowNull: false
    }
});
module.exports= User;