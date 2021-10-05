const mongooes = require('mongoose');
const Schema = mongooes.Schema;


const deliver = new Schema({

    productNO:{

        type:String,
    },

    productname:{

        type:String,
       
    },


    total:{
        type:String,
       
    },
    name:{
        type:String,
       
    },
   
    mobile:{
        type:String,
       
    },

    quty:{
        type:String,
       
    },
    address:{
        type:String,
       
    },

    area:{
        type:String,
       
    },

    type:{
        type:String,
       
    },

    charges:{
        type:String,
       
    },

    delivername:{
        type:String,
       
    },
    image:{
        type:String,
    }


    },
    
    {

        collection:'delivery'
    })

    module.exports = mongooes.model('delivery',deliver)