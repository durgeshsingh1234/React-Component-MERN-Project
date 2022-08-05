// importing the connection in model
const {Schema, model, Types} = require('../connection');

const schemaObject = new Schema({
    // For Addcode
    title:String,
    description:String,
    // thumbnail:String,
    code:String,
    uploadedBy:{type:Types.ObjectId,ref:'users'},
    createdAt:Date,
    imports : String,
})

module.exports = model('components',schemaObject);
