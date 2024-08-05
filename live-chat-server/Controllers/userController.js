const express = require('express');
const userModel = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require('../Config/generateToken');

const loginController = expressAsyncHandler(async(req, res) => {
  console.log(req.body);
  const { name, password } = req.body;

  const user = await userModel.findOne({ name });

  console.log("fetched user Data", user);
  console.log(await user.matchPassword(password));
  if(user && (await user.matchPassword(password))) {
        const response = {
          _id: user._id,
          name : user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        };
      console.log(response);
      res.json(response)
      
  } else {
    throw new Error("Invalid UserName or Password");
  }

});

// Registration
const registerController = expressAsyncHandler (async (req,res) => {
  const { name, email, password } = req.body;

    //check for all fields
    if(!name || !email || !password) 
   {
    res.send(400);
    throw Error("PLease fill all the details");
   }

   //pre-existing user 
   const userExist = await userModel.findOne({email});
   if(userExist)
    {
      throw new Error("User already exists");
    }

   // userName already taken
   const userNameExists = await userModel.findOne({name});
   if(userNameExists)
    {
      throw new Error("User Name already taken");
    }

    // create an entry in db
    const user = await userModel.create({ name, email, password});
    if(user) 
    {
       res.status(201).json({
           _id: user._id,
           name: user.name,
           email: user.email,
           isAdmin: user.isAdmin,
           token: generateToken(user._id),
       });
    }
    else {
        res.status(400);
        throw new Error("Registration error");
    }
});


module.exports= { loginController, registerController };