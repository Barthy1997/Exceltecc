module.exports= app =>{
const Client=require('../controlleurs/Client.controlleurs.js');
const express=require('express');
var  route=express.Router();
route.get('/add',(req,resp)=>{
    resp.json('etudiant');
    });

route.get('/',AfficherClient);
route.get('/',AfficherClient);
route.post('/post',client.Create);
}
