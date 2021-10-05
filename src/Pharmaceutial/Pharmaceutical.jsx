import React from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBInput
  } from "mdbreact";
  import { useState } from 'react';
  import { useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import axios from 'axios';
  import '../App.css'
import NavbarPage from "../Pages/NavbarPage"
import { ToastContainer, toast } from 'react-toastify';


export default function Pharmaceutical(props) {

    
    const[product,setproduct]= useState('');
    const[qunty,setqunty]= useState('');
    const[total,settotal]= useState('');
    const[company,setcompany]= useState('');
    const[country,setcountry]= useState('');
    const[date,setdate]= useState('');
    const[type,settype] = useState('')
    





    const Validate = () => {
      let error = false;
      if (!product || !qunty ||!company ||!country ||!date||!type ) {
        error = true;
  
        toast.warn('all details  must require')
  
  
  
  
  
      }
  
  
      if (product) {
  
  
        if (product.length < 3) {
          error = true;
  
          toast.warn(' product at least 3 Characters')
  
        }
      }
  
  
      if (qunty) {
  
  
        if (qunty < 0) {
          error = true;
  
          toast.warn('please Enter the Valid qunty')
  
        }
      }
  
  
      if (company) {
  
  
        if (company < 10) {
          error = true;
  
          toast.warn('please Enter the Valid company')
  
        }
      }
  
      if (date) {
  
  
        if (date < 3) {
          error = true;
  
          toast.warn('please enter Clear date')
  
        }


      }

      if (total) {
  
  
          if (total < 0) {
            error = true;
    
            toast.warn('please enter the Valid total')
    
          }
        }
  
  
      return error;
  
  
    }

    const submit= async(e)=>{

      
      e.preventDefault();
      if (!Validate()) {

    
       try{
      
    
    const  formdata  = {

        product,
        qunty,
       total,
         company,
         country,
       date,
       type
    }
    
        
       
       
    
       
       
         await axios.post(`http://localhost:4000/pharmacy/add`,formdata).then(res=>{
    
         console.log(res.data)
        
         })

         toast.success('data Added Sucessfully');
       }
       catch(err){
    
        console.log(err)
       }
    
      }
    }
   

    
  
    
    return (
       

      <div>

        
<title>LifeCheck </title>
       
       <link rel="shortcut icon" href="img/short.ico" />
       <div className="wrapper">
         <div className="top-bar clearfix">
           <div className="top-bar-links">
             <ul>
               <li><a href="#">Sign Up</a></li>
               <li><a href="#">Log In</a></li>
             </ul>
           </div> {/* top-bar-links */}
           <div className="top-bar-links-left">
             <p>Pharmacy Hotline : 071 9 774 774</p>
           </div>
           <div className="site-search">
             <form method="get" action="index.html">
               <input type="search" name="search-box" />
               <button type="submit" />
             </form>
           </div> {/* site-search */}
         </div> {/* top-bar */}
         <header className="clearfix">
           <div className="logo">
             <img src="https://i.pinimg.com/originals/26/a5/e1/26a5e1a57b0780c92bfa275431631b36.jpg" height="150px" width="300px" />
           </div> {/* logo */}
           <div className="socialmedia">
             <ul>
               <li><a href="#"><i className="fa fa-linkedin fa-fw" aria-hidden="true" /></a></li>
               <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
               <li><a href="#"><i className="fa fa-pinterest fa-fw" aria-hidden="true" /></a></li>
               <li><a href="#"><i className="fa fa-google-plus fa-fw" aria-hidden="true" /></a></li>
               <li><a href="#"><i className="fa fa-rss fa-fw" aria-hidden="true" /></a></li>
             </ul>
           </div> {/* socialmedia */}
         </header>
        </div >
         <nav className="purple-gradient">
           <ul>
             <li className ="nav-ux"><a className ="nav-ux" href="#">Home</a></li>
             <li className ="nav-ux"><a className ="nav-ux" href="/pharmas">Pharmaceutical</a></li>
             <li className ="nav-ux"><a  className ="nav-ux"href="/echannel">About us</a></li>
             <li className ="nav-ux"><a  className ="nav-ux"href="/Product">My Account</a></li>
             <li className ="nav-ux"><a className ="nav-ux" href="/contact">Contact</a></li>
           </ul>
            
         
         </nav>  
     
        <div className="rainy-ashville-gradient">
        
        
          <ToastContainer />
            <br>
            </br>
        <div className="items">
          
   
       

       

        <MDBContainer>
 <MDBRow>
   <MDBCol md="6">
     <MDBCard style={{width:"50rem"}}>
       <MDBCardBody>
           <center>
         <MDBCardHeader className="form-header deep-blue-gradient rounded" style={{width:"35rem",top:20} }>
           <h3 className="my-3">
           <MDBIcon icon="mortar-pestle" /> Pharmaceutical items
           </h3>
          
         </MDBCardHeader>
         <br></br>

         </center>
         <center>

<img src={"https://thumbs.dreamstime.com/b/medicines-medical-products-pharmacy-items-composition-vector-illustration-flat-cartoon-style-207456382.jpg"} alt="..." style={{ width: "40rem", left: "60rem" }} />
</center>
         <div>
        <center>
            
         <div class="card" style={{width: "18rem"}}>
         
       
  
                </div>
                </center>
                </div>
         <form onSubmit={submit}enctype="multipart/form-data">
           <div className="grey-text">
             <MDBInput 
               label=" product Name"
               icon="address-card"
               group
               type="text"
               validate
               error="wrong"
               success="right"
               value={product}
               onChange={(e)=>{
                   setproduct(e.target.value)
               }}
             />

               <MDBInput
               label=" product quantity"
               icon="capsules"
               group
               type="number"
               validate
               error="wrong"
               success="right"
               value={qunty}
               onChange={(e)=>{

                   setqunty(e.target.value)
               }}
             />
             
             <MDBInput
               label="total price"
               icon="dollar-sign"
               group
               type="number"
               validate
               value={total}
               onChange={(e)=>{

                   settotal(e.target.value)
               }}

             />
                <MDBInput
               label="company name"
               icon="sign"
               group
               type="text"
               validate
               value={company}
               onChange={(e)=>{

                   setcompany(e.target.value)
               }}

             />
       
       
        
       <MDBInput style={{width:"20rem"}}
  
               icon="list-ol"
               group
               type="date"
               validate
               value={date}
               onChange={(e)=>{

                   setdate(e.target.value)
               }}
             />


       <br></br>

      
        <select className="form-select" aria-label="Default select example" style={{width:"25rem"}}   value={country}
               onChange={(e)=>{

                   setcountry(e.target.value)
                 
                 
               }}>
       <option selected>select country </option>
       <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
        </select>

       
<br></br>
<select className="form-select" aria-label="Default select example" style={{width:"25rem"}}   value={type}
               onChange={(e)=>{

                   settype(e.target.value)
                 
                 
               }}>
       <option selected>select Type </option>
       <option value="Medicine">Medicine</option>
       <option value="Suppliment">Suppliment</option>
       <option value="Researcher">Researcher</option>
        </select>
       
       
           </div>


        <br></br>
     

        
         <div className="text-center mt-4">
         <button type ="submit" className="btn btn-success rounded-pill">Add Items </button>
         </div>
         </form>
         <MDBModalFooter>
          
         </MDBModalFooter>
       </MDBCardBody>
     </MDBCard>
   </MDBCol>
 </MDBRow>
</MDBContainer>


        </div>
        <br></br>
        <br></br>
        </div>
        </div>
    )
}
