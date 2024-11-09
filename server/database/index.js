
const  mongoose = require( "mongoose");

mongoose.connect("mongodb+srv://tusharnwd2003:Tushar2003@cluster0.fbstf.mongodb.net/").then(()=> console.log("Connected to MongoDB")).catch((err)=> console.log(err));
