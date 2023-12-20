const Users = require('../models/User');

const UpdateAge = async (req,res) => {
    try{
        if(!req?.body?.email || !req?.body?.age){
            res.status(404).json({"message":"Missing details"});
            return;
        }
        const email = req.body.email;
        const age = req.body.age;

        const user = await Users.findOne({email});

        if(!user){
            res.status(400).json({"message":"User not found"});
            return;
        }

        user.age = age;

        user.save();

        res.status(200).json({"message":"Age updated successfully"});
    }
    catch(err){
        res.status(500).json({"message":`Something went wrong ${err}`})
    }
}

const updateGender = async (req,res) => {
    try{
        if(!req?.body?.email || !req?.body?.gender){
            res.status(404).json({"message":"Missing details"});
            return;
        }
        const email = req.body.email;
        const gender = req.body.gender;

        const user = await Users.findOne({email});

        if(!user){
            res.status(400).json({"message":"User not found"});
            return;
        }

        user.gender = gender;

        user.save();

        res.status(200).json({"message":"Gender updated successfully"});
    }
    catch(err){
        res.status(500).json({"message":`Something went wrong ${err}`})
    }
}
const updateDOB = async (req,res) => {
    try{
        if(!req?.body?.email || !req?.body?.dob){
            res.status(404).json({"message":"Missing details"});
            return;
        }
        const email = req.body.email;
        const dob = req.body.dob;

        const user = await Users.findOne({email});

        if(!user){
            res.status(400).json({"message":"User not found"});
            return;
        }

        user.dob = dob;

        user.save();

        res.status(200).json({"message":"dob updated successfully"});
    }
    catch(err){
        res.status(500).json({"message":`Something went wrong ${err}`})
    }
}
const updateMobile = async (req,res) => {
    try{
        if(!req?.body?.email || !req?.body?.mobile){
            res.status(404).json({"message":"Missing details"});
            return;
        }
        const email = req.body.email;
        const mobile = req.body.mobile;

        const user = await Users.findOne({email});

        if(!user){
            res.status(400).json({"message":"User not found"});
            return;
        }

        user.mobile = mobile;

        user.save();

        res.status(200).json({"message":"mobile updated successfully"});
    }
    catch(err){
        res.status(500).json({"message":`Something went wrong ${err}`})
    }
}
module.exports = {UpdateAge,updateGender,updateDOB,updateMobile}