const mongoose = require('mongoose');
const dbName="reactcomponentdb";
// dbName is the name of the database.
const dbUrl=`mongodb+srv://durgeshsingh2002:durgeshsingh2002@cluster0.wvyeykq.mongodb.net/${dbName}?retryWrites=true&w=majority`

// asynchronous function
// this function will return a promise
// const res = await mongoose.connect(dbUrl)
// await change the asynchronise to synchronous function

mongoose.connect(dbUrl)
.then((result) => {
  console.log('Connected to MongoDB')  
})
.catch((err) => {
    console.error(err);
    });

    module.exports = mongoose;
