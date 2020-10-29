const router = require('express').Router();
const User = require('../models/User')

router.post('/', async(req,res)=>{

    const emailExistt = await User.findOne({answer: req.body.answer});
    if(emailExistt) return res.status(400).send('Answer already exists');
    
    
    //Create a new answer
        const user = new User({
        answer:req.body.answer
        });
        try{
            //Getting the question and saving
             const savedUser = await user.save();
            res.send(savedUser);
        }catch(err){
            res.status(400).send(err);
        }
       
    });
    
    //Getting answers
    router.get('/', async (req,res) =>{
        try{
            const answers = await User.find()
            return res.status(200).json(answers)
        } catch (error) {
            return res.status(500).json({"error":error})
        }
    })

    //deleting a customer
    router.delete('/', async(req, res,) => {
        try{
           const removedPost =  await User.deleteOne({_id: req.params.answer});
           res.json( removedPost);
        } catch (err) {
            res.status(500).send("Unable to save")
        }
        });
    

module.exports = router;