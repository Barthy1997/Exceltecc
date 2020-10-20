const express = require('express');
const mongoose = require('mongoose');
const Production = require('../models/Produit.model');
const commande= require('../models/commande.model');
var route = express.Router();




route.post('/ajoutProduit', (req, res) => {
    var product = new Production();
    product.nom= req.body.nom;
    product.marque = req.body.marque;
    product.description = req.body.description;
    product.prix = req.body.prix;
    product.save(function (err, data) {
        if (err) { res.send(err) }
        else {
            res.send({ data: 'insertion reussi' });

        }
    })
});
route.post('/ajoutCommande', (req, res) => {
    var comd = new commande();
    comd.nom= req.body.nom;
    comd.prix =req.body.prix;
    comd.marque =req.body.marque;
    comd.save(function (err, data) {
        if (err) { res.send(err) }
        else {
            res.send({ data: 'insertion reussi' });

        }
    })
});


route.get('/getProduct', (req, res) => {
    console.log("");
    Production.find((err, docs) => {
        console.log('Here products', docs);
        if (err) {
            console.log('Error', err)
        }
        res.status(200).json({
            product: docs,
            messages: 'OK'

        })

    });
});

route.delete('/Delete/:id',(req,res)=>{
    console.log("kkkck");
    Production.findByIdAndDelete(req.params.id ,(err,docs) =>{
        if(!err)
        {
          console.log(docs);
          res.status(200).json({
           
        
        })

        }
    })

})

route.get('/Panier/:id', (req, res) => {
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