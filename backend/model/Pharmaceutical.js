

const mongooes = require('mongoose');
let Schema = mongooes.Schema;


let pharmacy = new Schema({


 
    
    product:{


        type:String
       
    },

    qunty:{


        type:String
       
    },

    total:{

        type:String,
       
    },

    company:{
        type:String,
       
    },

    country:{
        type:String,
       
    },
    date:{
        type:String,
       
    },

    type:{
        type:String,
       
    },
   
    
   


},{

    collection:'pharmacy'
});

module.exports = mongooes.model('pharmacy',pharmacy);