const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const { validateRegister, loginValidation } = require('../model/validations');


//validations



router.post('/register', async (req, res)=>{

    //validate before user
    

    //check if user is already there
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send('Email already exitss');

    //hashpasswords
    //salt- mess of a values
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err){
        res.status(400).send(err);
    }
})

router.post('/login', async (req, res)=>{
    //validate before user

    //validate email exists
    const emailExists = await User.findOne({email: req.body.email});
    if(!emailExists) return res.status(400).send('There is no User with that Email'); 

    //validate password is correct
    const validPass = await User.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid Password');

    //login if valid
    res.send('Hi you logged in....')
})

module.exports = router;