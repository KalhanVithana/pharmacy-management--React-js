const mongooes = require('mongoose');
let Schema = mongooes.Schema;


let Product = new Schema({


 
    productNO:{


        type:String
       
    },

    productname:{

        type:String,
       
    },

    description:{
        type:String,
       
    },

    avalibility:{
        type:Boolean,
        default:0
    },

    price:{
        type:String,
       
    },
    category:{
        type:String,
       
    },

    quty:{
        type:String,
       
    },
    message:{

        type:String,
       
    },
    userID:{

        type:String,
        //required:true
    },
    filename:{

        type:String,
        required:true
      
       
    },
   


},{

    collection:'product'
});

module.exports = mongooes.model('product',Product);