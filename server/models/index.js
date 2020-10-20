const dbconfig=require('../config/dbconfig.js');
const mongoose =require("mongoose");
mongoose.Promise=global.Promise;
const db={}
db.mongoose=mongoose;
db.url=dbconfig.url;
db.Client=require('./Client.models.js');
module.exports=db;

