let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();


let Pharmacy = require('../model/Pharmaceutical');

router.route('/add').post((req, res, next) => {
  Pharmacy.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});





router.route('/').get((req, res) => {
  Pharmacy.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/pharma/:id').get((req, res) => {
 
      Pharmacy.findById(req.params.id,(error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
})





router.route('/update/:id').put((req, res, next) => {
  Pharmacy.findByIdAndUpdate(req.params.id, {
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
  Pharmacy.findByIdAndRemove(req.params.id, (error, data) => {
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