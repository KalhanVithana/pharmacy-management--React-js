express = require('express');
router = express.Router();
let product = require('../model/Product');

const multer = require('multer');

const Storage = multer.diskStorage({

    destination:(req,file,callback)=>{
        callback(null,'../public/');
      },
      filename:(req,file,callback) =>{
        callback(null,file.originalname)
      }

})

const upload = multer({storage:Storage})



router.route('/add').post(upload.single("filename"),async(req,res)=>{


    try{

        const {productNO,productname,description,price,category,quty} = req.body


    const  AdminProduct = new product({

     
      
        productNO,
        productname,
        description,
        price,
        category,
        quty,
        filename:req.file.originalname
      

    })

    const Saveproduct = await AdminProduct.save();
    console.log(Saveproduct);

    return res.status(200).json({msg:"save product sucessfully"})


    }
    catch(err){

        return res.status(500).json({msg:"err"+err})
    
    }

})





router.route('/update/:id').put(upload.single("filename"),async(req,res)=>{


    const {productNO,productname,description,price,category,quty} = req.body


    const  AdminProduct = new product({

     
        productNO,
        productname,
        description,
        price,
        category,
        quty,
        filename:req.file.originalname
       
      

    })

   await product.findByIdAndUpdate(req.params.id,{
      $set:{
        productNO,
        productname,
        description,
        price,
        category,
        quty,
        filename:req.file.originalname
        
    }
  },(error,data)=>{
    if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
      
      }
  })
    


})






router.route('/edit/:id').get(async(req,res)=>{

  
    await product.findById(req.params.id,(error,data)=>{

        if(error){

            res.status(400).json(error)
        }
        else{

            res.json(data);
        }
    })

})

router.route('/delete/:id').delete(async(req,res)=>{

      await  product.findByIdAndDelete(req.params.id,(error,data)=>{

        if(error){

            res.status(400).json(error)
        }
        else{

            res.json(data);
        }


        })

})

router.route('/all/:id').get(async(req,res)=>{

    await product.findById(req.params.id,(error,data)=>{


        if(error){

            res.status(400).json(error)
        }
        else{

            res.json(data);
        }

    })


  
})

router.route('/all').get(async(req,res,next)=>{


    await product.find((error,data)=>{

        
        if(error){
            return next(error);
        }
        else{
            res.json(data);
           
        }
    })
})
  module.exports =router