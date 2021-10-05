const mongooes = require('mongoose');
let Schema = mongooes.Schema;


let Channel = new Schema({


    prname:{

        type:String,
       
    },
    prno:{

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

    collection:'Channel'
});

module.exports = mongooes.model('Channel',Channel);