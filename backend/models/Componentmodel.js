// importing the connection in model
const {Schema, model} = require('../connection');

const schemaObject = new Schema({
    // For Addcode
    title:String,
    description:String,
    thumbnail:String,
    code:String,
    createdAt:Date,
    
})

module.exports = model('components',schemaObject);
