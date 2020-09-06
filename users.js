const express =require('express');
const router =express.router()
const user =require('../modules/user');

     try {
         const users = await user.save()
         res.status(201).json( newuser)
     }
     catch (err) {
         res.status(400).json({message:err.message})
     }

 //creating one
 router.post('/',(req,res) => {
     res.send(req.params.id)
 })

 //updating one
 router.patch('/',(req,res) => {

 })
 
//signup route
app.use('/', signuproute)
 //deleting one
 router.delete('/:id',(req,res) => {

 })

 module.exports = router