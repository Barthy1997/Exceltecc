const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/Produit.model')
const Actu=require('../models/Actualités.model');
const Client=require ('../models/Client.models')
var route = express.Router();



route.post('/createUser', (req, res) => {
    var client = new Client();
    client.nom = req.body.nom;
    client.email = req.body.email;
    client.pwd = req.body.password;
    client.ConfirPwd = req.body.Confirpwd;
    client.save(function (err, data) {
        if (err) { res.send(err) }
        else {
            res.send({ data: 'insertion reussi' });

        }
    })
});
route.get('/getUser', (req, res) => {
    Client.find((err, docs) => {
        console.log('Here products', docs);
        if (err) {
            console.log('Error', err)
        }
        res.status(200).json({
            user: docs,
            

        })

    });
});
route.post('/ajoutActu', (req, res) => {
    var actu = new Actu();
    actu.titre = req.body.titre;
    console.log(req.body.titre);
    actu.contenue = req.body.contenue;
    actu.save(function (err, data) {
        if (err) { res.send(err) }
        else {
            res.send({ data: 'insertion reussi' });

        }
    })
});
route.get('/getActu',(req,res)=>{
    Actu.find((err,docs)=>{
        if (!err) {
            
            res.status(200).json({
                actu: docs,
            })
        }

    })


})

route.get('/Connection/:id',(req, res) => {
    Production.findById(req.params.id, (err, docs) => {
        if (!err) {
            //console.log("tata", docs);
            //console.log("tata", req.params.id);
            res.status(200).json({
                products: docs,
                message: 'OK'
            })

        }

    });
});



module.exports = route;