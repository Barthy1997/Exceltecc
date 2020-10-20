const mongoose = require('mongoose');

var ProduitSchema = new mongoose.Schema({
     nom: {
          type: String
     }
     ,
     prix: {
          type: Number
     }
     ,
     description: {
          type: String
     }
     ,
     marque: {
          type: String
     }
     
    
});
const product = mongoose.model('Product', ProduitSchema);

module.exports = product;