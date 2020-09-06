const express= require('express');
const app =express();
const mongoose = require('mongoose');
mongoose.connected ('mongodb://localhost|users,usenew url parser:true')

const db=mongoose.coonection
db.on('error',(error) => console.error(error))
db.once('open', () => console.log ('connected to database'))
app.use(express.json())
const usersers  = require('routes|users')

app.use('|users')
