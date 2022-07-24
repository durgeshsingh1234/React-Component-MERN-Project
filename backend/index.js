const express = require('express');


// insitializing express app
const app=express();

const userrouter = require('./routers/UserRouter');
const componentrouter = require('./routers/ComponentRouter');

const cors = require('cors');

// middleware
// to parse the json object to javascript object
app.use(express.json());

// for allowing frontend to access backend
app.use(cors({origin : ['http://localhost:3000']}))

app.use('/user',userrouter);
app.use('/components',componentrouter);



// server run on the port 5000
const port=5000;

// provide the response to localhost:5000 with app.get()
app.get('/',(req,res)=>{
res.send('Response from Express!');
});
// provide the response to localhost:5000/home with app.get()
app.get('/home',(req,res)=>{
    res.send('Response from Express home!');
    });

// listen is used to start the server
app.listen(port,()=>console.log('server started at port 5000'));




