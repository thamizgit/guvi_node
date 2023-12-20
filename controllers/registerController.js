const Users = require('../models/User');
const bcrypt = require('bcrypt');

const registerUser = async (req,res) => {
        if(!req?.body?.username || !req?.body?.password || !req?.body?.email){
            res.status(404).json({"message":"missing fields"});
            return;
        }
        try{
        const username = req.body.username;
        const email = req.body.email;

        const name = await Users.findOne({username}).exec();

        if(name){
            res.status(402).json({"message":"Username already taken"});
            return;
        }

        const user = await Users.findOne({email}).exec();
        
        if(user){
            res.status(409).json({"message":"You have been already registered"});
            return;
        }

        

        const password = await bcrypt.hash(req.body.password,10);

        const newUser = await Users.create({username,email,password});

        console.log(newUser);

        res.status(201).json({"message":"User successfully created"});
    }
    catch(err){
        res.status(500).json({"message":err});
    }
}

module.exports = registerUser;