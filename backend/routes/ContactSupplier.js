let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();


let ContactSupplier = require('../model/ContactSupplier');

router.route('/add').post((req, res, next) => {
  ContactSupplier.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});





router.route('/').get((req, res) => {
  ContactSupplier.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/edtContact/:id').get((req, res) => {
 
      ContactSupplier.findById(req.params.id,(error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
})





router.route('/update/:id').put((req, res, next) => {
  ContactSupplier.findByIdAndUpdate(req.params.id, {
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
  ContactSupplier.findByIdAndRemove(req.params.id, (error, data) => {
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