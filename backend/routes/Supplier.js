let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();


let Supplier = require('../model/Supplier');

router.route('/add').post((req, res, next) => {
  Supplier.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});





router.route('/').get((req, res) => {
  Supplier.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/getSupllier/:id').get((req, res) => {
 
      Supplier.findById(req.params.id,(error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
})





router.route('/update/:id').put((req, res, next) => {
  Supplier.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
     
    }
  })
})

router.route('/delete/:id').delete((req, res, next) => {
  Supplier.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;