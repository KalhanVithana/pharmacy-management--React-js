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


export default function ContactSupplier(props) {

    
    const[prno,setprno]= useState('');
    const[lname,setlname]= useState('');
    const[email,setemail]= useState('');
    const[address,setaddress]= useState('');
    const[mobile,setmobile]= useState('');
    const[description,setdescription]= useState('');
    const[prname,setprname]= useState('');
    
    



  

    const Validate = () => {
      let error = false;
      if (!prname ||!prno ||!lname || !email  || !mobile||!description) {
        error = true;
  
        toast.warn('all details  must require')
  
  
  
  
  
      }
  
      if (prname) {
  
  
        if (prname.length < 3) {
          error = true;
  
          toast.warn(' Product Name at least 3 Characters')
  
        }
      }
  
      if (prno) {
  
  
        if (prno.length < 3) {
          error = true;
  
          toast.warn(' prno at least 3 Characters')
  
        }
      }

      if (lname) {
  
  
        if (lname.length < 3) {
          error = true;
  
          toast.warn(' prno at least 3 Characters')
  
        }
      }
  
  
  
      if (email) {
  
  
        if (email.indexOf("@") === -1) {
          error = true;
  
          toast.warn('please Enter the Valid Email')
  
        }
      }
  
  
      if (mobile) {
  
  
        if (mobile < 10) {
          error = true;
  
          toast.warn('please Enter the Valid Mobile')
  
        }
      }
  
      if (description) {
  
  
        if (description < 3) {
          error = true;
  
          toast.warn('please enter Clear Description')
  
        }


      }

      if (address) {
  
  
          if (address.length < 2) {
            error = true;
    
            toast.warn('please enter the Valid address')
    
          }
        }
  
  
      return error;
  
  
    }

    const submit= async(e)=>{

      
      e.preventDefault();
      if (!Validate()) {

    
       try{
      
    
    const  formdata  = {

      prname,
        prno,
        lname,
        email,
         mobile,
       description
    }
    
        
       
       
    
       
       
         await axios.post(`http://localhost:4000/eChannel/add`,formdata).then(res=>{
    
         console.log(res.data)
        
         })

         toast.success('Submited sucessfully');
       }
       catch(err){
    
        console.log(err)
       }
    
      }
    }

   

    
  
    
    return (
       
      <div>
      <NavbarPage/>
      <div className="blue-gradient">
         
          <ToastContainer />
            <br>
            </br>
            <br>
            </br>
            
        <div classprno="items-feedback" style={{left:"60rem"}}>
          
   
       

       

        <MDBContainer>
 <MDBRow>
   <MDBCol md="6">
     <MDBCard style={{width:"50rem",left:"8rem"}}>
       <MDBCardBody>
           <center>
          
         <MDBCardHeader className="form-header  blue-gradient rounded" style={{width:"35rem",top:20} }>
           <h3 className="my-3">
           <MDBIcon fab icon="avianex" /> Request Supplier
           </h3>
          
         </MDBCardHeader>

         <br></br>
         </center>
         <div>
        <center>
            
         <div class="card" style={{width: "18rem"}}>
         
    
  
                </div>
                </center>
                </div>
                <form onSubmit={submit}> 
        {/* 2 column grid layout with text inputs for the first and last names */}
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">

          
              <input type="text" id="form6Example1" className="form-control" value={prno} onChange={(e)=>{
                setprno(e.target.value)
              }}/>
              <label className="form-label" htmlFor="form6Example1">Product NO</label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
            <input type="text" id="form6Example1" className="form-control" value={prname} onChange={(e)=>{
                setprname(e.target.value)
              }}/>
              <label className="form-label" htmlFor="form6Example2">Product Name</label>
            </div>
          </div>
        </div>
   
        {/* Text input */}
        <div className="form-outline mb-4">
          <input type="text" id="form6Example4" className="form-control" value={lname} onChange={(e)=>{
                setlname(e.target.value)
              }}/>
          <label className="form-label" htmlFor="form6Example4"> suppier Name</label>
        </div>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input type="email" id="form6Example5" className="form-control" value={email} onChange={(e)=>{
                setemail(e.target.value)
              }} />
          <label className="form-label" htmlFor="form6Example5">Email</label>
        </div>
        {/* Number input */}
        <div className="form-outline mb-4">
          <input type="number" id="form6Example6" className="form-control" value={mobile} onChange={(e)=>{
                setmobile(e.target.value)
              }} />
          <label className="form-label" htmlFor="form6Example6">Phone</label>
        </div>
        {/* Message input */}
        <div className="form-outline mb-4">
          <textarea className="form-control" id="form6Example7" rows={4} defaultValue={""} value={description} onChange={(e)=>{
                setdescription(e.target.value)
              }} />
          <label className="form-label" htmlFor="form6Example7">Additional information</label>
        </div>
       
        {/* Submit button */}
        <center>
        <button type="submit" className="btn btn-secondary btn-block mb-4 blue-gradient rounded-pill "style={{width:"35rem"}}>submit</button>
        </center>
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
        <br></br>
        </div>
        </div>
    )
}
