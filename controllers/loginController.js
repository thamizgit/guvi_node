const Users = require('../models/User');

const bcrypt = require('bcrypt');

const loginUser = async (req,res) => {
    try{
        if(!req?.body?.email || !req?.body?.password)
        {
            res.status(404).json({"message":"Missing credentials"});
            return;
        }

        const email = req.body.email;

        const user = await Users.findOne({email}).exec();

        if(!user)
        {
            res.status(401).json({"message":"You have not created an account"});
            return;
        }

        const match = await bcrypt.compare(req.body.password,user.password);

        if(match){
            res.status(200).json(user);
            return;
        }
        else{
            res.status(401).json({"message":"Incorrect password"});
        }

    }
    catch(err){
        res.status(500).json({"message":"Something went wrong"});
    }
}
module.exports = loginUser;