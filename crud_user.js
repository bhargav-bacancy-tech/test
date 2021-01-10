const Sequelize = require('sequelize');
const sequelize = require('./connection');
const User = require('./user');

async function addUser(){
    const user =User.create({id:"4", name: "shane" , age: "24",});
    console.log(user.name); 
    console.log('User is added to the database!');
    (await user).save
}
async function updateUser(){
    console.log(sequelize.models);
    const user = await User.findOne({id:1});
    
    user.name = "Jane"
    console.log('User is updated to the database!');
    await user.save();
} 
async function getUser(){
    const user = await User.findAll();
    user.forEach(dataValues => {
        console.log(" id: "+dataValues.id+" name: "+ dataValues.name +" age: "+dataValues.age );
    });
    

}
async function deleteUser(){
    const user = await User.findOne({id:1});
    await user.destroy();
    console.log("user deleted..!")
}


module.exports= {addUser,updateUser,getUser,deleteUser};