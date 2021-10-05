const express = require('express');
const mongooes =  require('mongoose');
const core = require('cors');
const bodyparser = require('body-parser')
const dbConfig = require('./db/db')
require('dotenv').config();
const productRoutes = require('./routes/productRoute');
const stock = require('./routes/stock');
const Order = require('./routes/order');
const Delivery = require('./routes/delivery');
const Supplier = require('./routes/Supplier');
const Feedback = require('./routes/feedback');
const Contact = require('./routes/ContactSupplier');
const Pharmaceutical = require('./routes/Pharmaceutical');


mongooes.Promise = global.Promise;

mongooes.connect(dbConfig.db,{
    useNewUrlParser:true
}).then(() => {
    console.log('Database sucessfully connected!')
  },
    error => {
      console.log('Could not connect to database : ' + error)
    }
  )

  const app = (express());
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({
      extended:true
  }));
  app.use(core());
  app.use('/user',productRoutes);
  app.use('/stock',stock);
  app.use('/order',Order);
  app.use('/Delivery',Delivery);
  app.use('/supplier',Supplier);
  app.use('/feedback',Feedback);
  app.use('/eChannel',Contact);
  app.use('/pharmacy',Pharmaceutical);

  const PORT = process.env.PORT || 4000;
  
  const server = app.listen(PORT,()=>{
      console.log("conected to the port"+PORT);
  })