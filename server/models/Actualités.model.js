const mongoose=require('mongoose');

var ActualiteSchema = new mongoose.Schema({
    titre:{
         type: String
    }
    ,
      contenue:{
        type: String
   }

});
const Actualite = mongoose.model('Actualite', ActualiteSchema);

module.exports=Actualite;