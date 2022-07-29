// importing the connection in model
const {Schema, model} = require('../connection');

const schemaObject = new Schema({
    // For Signup and Login 
    fname:String,
    lname:String,
    email:String,
    // mobile:String,
    // age:Number,
    password: String, 
    // confirmpassword:String,
})

module.exports = model('users',schemaObject);
