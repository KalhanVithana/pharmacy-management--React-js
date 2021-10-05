const mongooes = require('mongoose');
let Schema = mongooes.Schema;


let feedback = new Schema({

    fname:{

        type:String,
       
    },
    lname:{

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

   
    description:{
        type:String,
       
    }


},{

    collection:'feedback'
});

module.exports = mongooes.model('feedback',feedback);