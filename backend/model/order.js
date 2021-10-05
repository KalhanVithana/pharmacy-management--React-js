const mongooes = require('mongoose');
const Schema = mongooes.Schema;


const order = new Schema({

    productNO:{

        type:String,
    },

    productname:{

        type:String,
       
    },


  
    price:{
        type:String,
       
    },

    quty:{
        type:String,
       
    },
   
    total:{
        type:String,
       
    },
    name:{
        type:String,
       
    },
    email:{
        type:String,
       
    },
    nic:{
        type:String,
       
    },
    mobile:{
        type:String,
       
    },
    address:{
        type:String,
       
    },
    image:{
        type:String,
       
    },
   
   
       
    },
    
    {

        collection:'order'
    })

    module.exports = mongooes.model('order',order)