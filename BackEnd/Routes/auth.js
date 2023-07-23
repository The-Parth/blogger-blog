const express = require('express');
const router = express.Router();
const User = require("../Models/User");
const { body, sanitizeBody, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchUser=require('../middleware/user');
const { json } = require('body-parser');


const JWT_token ="csi123";
router.post('/createUser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 3 })
], async (req, res) => {
    const success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    // Checking if user email is already exists or not 
    try {
        let user = await User.findOne({ 'email': req.body.email })
        if (user) {
            return res.status(400).json({success, Error: 'User with this email already exist' })
        }
        // Creating User
        const salt= await bcrypt.genSalt(10);
        let secPass= await bcrypt.hash(req.body.password,salt);
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        })
        const data={
            id:user.id
        } 
        const token=jwt.sign(data,JWT_token);
        res.json({success:true,token})

    } catch (error) {
        console.error(error);
    }

})

router.post('/login', [
    body('email').isEmail(),
    body('password').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password}=req.body;
    try{
        let success = false;
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({success,"error":"Please login with appropriate credentials"});
        }
        const comPassword= await bcrypt.compare(password,user.password);
        if(!comPassword){
            return res.status(400).json({success,"error":"Please login with appropriate credentials"});
        }
        const data={
            id:user.id
        } 
        const token=jwt.sign(data,JWT_token);
        res.json({success:true,token})

    }catch (error) {
        console.error(error);
    }
   

})

//  Route:3 To get user details using from Token

router.post('/getuser', fetchUser, async (req, res) => {

    try {
        const userId = req.user.id;
        const user= await User.findById(userId).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error);
    }
})

router.get("/userbyid/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user); // Sending the user object as a JSON response

        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;