let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();


let feedback = require('../model/feedback');

router.route('/add').post((req, res, next) => {
  feedback.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});





router.route('/').get((req, res) => {
  feedback.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


router.route('/edt/:id').get((req, res) => {
 
      feedback.findById(req.params.id,(error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
})





router.route('/update/:id').put((req, res, next) => {
  feedback.findByIdAndUpdate(req.params.id, {
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
  feedback.findByIdAndRemove(req.params.id, (error, data) => {
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