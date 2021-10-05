const mongooes = require('mongoose');
const Schema = mongooes.Schema;


const Stock = new Schema({

   
    productNO:{
        type:String,
    },
    productname:{

        type:String,
       
    },

    description:{
        type:String,
       
    },

  

    price:{
        type:String,
       
    },

    quty:{
        type:String,
       
    },
    message:{

        type:String,
       
    },
   
       
    },
    
    {

        collection:'Stock'
    })

    module.exports = mongooes.model('Stock',Stock)