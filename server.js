const express = require('express');
const bodyParser = require("body-parser");
var nodemailer = require('nodemailer');
var app = express();
const Clientcontrolleur = require('./server/controlleurs/Client.controlleurs');
const ProduitControlleur=require('./server/controlleurs/Produit.controlleurs')
const { report } = require('process');
const { log } = require('console');
app.use(express.static('../accounting-client/dist'));
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extented: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'Get,POST,DELETE,Patch,Put');
  next();

});
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/UniversitéDb', {useNewUrlParser:true},(err)=>{
    if(!err){console.log('succès de la connection')}
    else{console.log('erreur')}
});


app.use('/', Clientcontrolleur);
app.use('/',ProduitControlleur);


app.listen(4201, (res, req) => {
  console.log("connexion");
});