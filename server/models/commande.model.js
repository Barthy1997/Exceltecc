const mongoose = require('mongoose');

var commandeSchema = new mongoose.Schema({
     nom: {
          type: String
     }
     ,
     prix: {
          type: Number
     }
     ,
     marque: {
          type: String
     }
     
    
});
const commande = mongoose.model('commande', commandeSchema);

module.exports = commande;