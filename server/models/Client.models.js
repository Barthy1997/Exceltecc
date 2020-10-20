const { BoundDirectivePropertyAst } = require('@angular/compiler');
const mongoose=require('mongoose');
const { schema } = require('./Produit.model');

var ClientSchema = new mongoose.Schema({
    nom:{
         type: String
    }
    ,
      email:{
        type: String
   }
   ,
     pwd:{
      type: String
     }
     ,
     ConfirPwd:{
      type: String
     }
     

});

const client = mongoose.model('client', ClientSchema);

module.exports=client;