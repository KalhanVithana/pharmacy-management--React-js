const mongooes = require('mongoose');
let Schema = mongooes.Schema;


let supplier = new Schema({

    name:{

        type:String,
       
    },

    email:{

        type:String,
        
    },

    address:{
        type:String,
       
    },
    

    mobile:{
        type:String,
       
    },

    Supply:{
        type:String,
       
    },
    description:{
        type:String,
       
    }


},{

    collection:'supplier'
});

module.exports = mongooes.model('supplier',supplier);