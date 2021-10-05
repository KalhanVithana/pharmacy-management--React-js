express = require('express');

router = express.Router();

let stock =  require('../model/stock')


router.route('/add').post(async(req,res)=>{

await stock.create(req.body,(err,data)=>{

    if (err) {
        console.log(err)
      } else {
        console.log(data)
        res.json(data)
      }
})

})

router.route('/').get(async(req,res)=>{

  await stock.find((error,data)=>{

    if (error) {
        console.log(error)
      } else {
        console.log(data)
        res.json(data)
      }

   })
})


router.route('/edits/:id').get(async(req,res)=>{

    await stock.findById(req.params.id,(error,data)=>{


        if (error) {
            console.log(error)
          } else {
          
            res.json(data)
          }
    
       })
})

router.route('/update/:id').put(async(req,res)=>{

    await stock.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>{


        
        if (error) {
            console.log(error)
          } else {
          
            res.json(data)
          }
    
   
    })
})

router.route('/delete/:id').delete(async(req,res)=>{


     await stock.findByIdAndRemove(req.params.id,(error,data)=>{

        if (error) {
            console.log(error)
          } else {
          
            res.json(data)
          }
     })


})




module.exports =router;