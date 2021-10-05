
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavbarPage from './Pages/NavbarPage';
import Product from './Components/Product';
import EditProduct from "./Components/EditProduct";
import Header from "./headers/Header";
import { useState,useEffect } from "react";
import axios from "axios";
import Stock from "./Components/Stock";
import Updatestock from "./Components/Updatestock";
import { Carousel } from 'react-responsive-carousel';

import './App.css'
import Order from "./order/order";
import Orderlist from "./order/Orderlist";
import OrderProfile from "./order/OrderProfile";
import Delivery from "./Delivery/Delivery";
import DeliveryProfile from "./Delivery/DeliveryProfile";
import DeliveryData from "./Delivery/DeliveryData";
import Supplier from "./Supplier/Supplier";
import GetSupplier from "./Supplier/GetSuppliers";
import SupplierProfile from "./Supplier/SupplierProfile";
import FeedBack from "./Feedback/Feedback";
import Footer from "./Pages/Footer";
import GetFeedback from "./Feedback/GetFeedback";
import EditFeedback from "./Feedback/EditFeedback";
import EditContactSupllier from "./ContactSUpplier/EditContactSupplier";
import ContactSupllier from "./ContactSUpplier/ContactSupplier";
import GetContact from "./ContactSUpplier/GetConntactSupplier";
import EditPharmaceutical from "./Pharmaceutial/EditPharmaceutical";
import GetPharmacy from "./Pharmaceutial/GetPharmaceutical";
import Pharmaceutical from "./Pharmaceutial/Pharmaceutical";



function App() {

  
  return (
    <Router>
      




 


   
      <Switch>
    
     

                
                  <Route  exact  path='/' component={Header}/>
                  <Route    path='/nav' component={NavbarPage}/>
                   <Route   path='/Product' component={Product}/>
                   <Route   path='/edit/:id' component={EditProduct}/>
                   <Route   path='/stock' component={Stock}/>
                   <Route   path='/edits/:id' component={Updatestock}/>
                   <Route   path='/all/:id' component={Order}/>
                   <Route   path='/order' component={Orderlist}/>
                   <Route   path='/details/:id' component={OrderProfile}/>
                   <Route   path='/deliver/:id' component={Delivery}/>
                   <Route   path='/get/:id' component={DeliveryProfile}/>
                   <Route   path='/deliver' component={DeliveryData}/>
                   <Route   path='/getSupllier/:id' component={SupplierProfile}/>
                   <Route   path='/Supllier' component={GetSupplier}/>
                   <Route   path='/contact' component={Supplier}/>
                   <Route   path='/GetFeedback' component={GetFeedback}/>
                   <Route   path='/edt/:id' component={EditFeedback}/>
                   <Route   path='/edtContact/:id' component={EditContactSupllier}/>
                   <Route   path='/ContactSupllier' component={ContactSupllier}/>
                   <Route   path='/GetContact' component={GetContact}/>
                   <Route   path='/pharma/:id' component={EditPharmaceutical}/>
                   <Route   path='/pharma' component={GetPharmacy}/>
                   <Route   path='/pharmas' component={Pharmaceutical}/>


              
                </Switch>
               
              
               
                <Footer/>
                
    </Router>
   


  );
}

export default App;
