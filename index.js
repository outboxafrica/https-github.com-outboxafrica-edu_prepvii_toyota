const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT;

//Connect to the db
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true, useUnifiedTopology: true },
 ()=> console.log('connected to db')
 );

//Middleware
app.use(express.json());


const registerroutes = require('./routes/register');
app.use('/register',registerroutes);

const loginrroutes = require('./routes/login');
app.use('/login',loginrroutes);

const homeroutes = require('./routes/home');
app.use('/home',homeroutes);

const questionroutes = require('./routes/question');
app.use('/question',questionroutes);

app.listen(port,()=>{
    console.log(`Server running`)
});