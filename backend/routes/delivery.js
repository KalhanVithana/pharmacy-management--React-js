let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();


let Delivery = require('../model/Delivery');
let order = require('../model/order');

router.route('/add').post((req, res, next) => {
  Delivery.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});





router.route('/').get((req, res) => {
  Delivery.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/deliver/:id').get((req, res) => {
 
  order.findById(req.params.id,(error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
})

router.route('/get/:id').get((req, res) => {
 
  Delivery.findById(req.params.id,(error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
})





router.route('/update/:id').put((req, res, next) => {
  Delivery.findByIdAndUpdate(req.params.id, {
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
  Delivery.findByIdAndRemove(req.params.id, (error, data) => {
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