const express = require('express');
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
const User=require('../models/Client.models');
var route = express.Router();

route.post('/connection',(req,res)=>
{
   let connection= User.findOne({email:req.body.email}).exec();

  connection.then(function(doc){
      if(doc)
      {
          if(doc.isValid(req.body.pwd)){
            var token = jwt.sign({pwd:req.body.pwd },'secret',{expiresIn:'3h'});
            res.status(200).json(token);

          }
      }
  })
})

module.exports = route;