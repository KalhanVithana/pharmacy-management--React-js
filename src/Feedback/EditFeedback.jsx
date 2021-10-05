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


export default function EditFeedback(props) {

    
    const[fname,setfname]= useState('');
    const[lname,setlname]= useState('');
    const[email,setemail]= useState('');
    const[address,setaddress]= useState('');
    const[mobile,setmobile]= useState('');
    const[description,setdescription]= useState('');
    
    





    useEffect(async () => {


        await axios.get(`http://localhost:4000/feedback/edt/${props.match.params.id}`).then(res => {
  
            setfname(res.data.fname)
            setlname(res.data.lname)
            setemail(res.data.email)
            setaddress(res.data.address)
            setmobile(res.data.mobile)
            setdescription(res.data.description)

            
        })
      

    }, [])

   

    const submit= async(e)=>{

      
      e.preventDefault();
     

    
       try{
      
    
    const  formdata  = {

        fname,
        lname,
        email,
       address,
         mobile,
       description
    }
    
        
       
       
    
       
       
         await axios.put(`http://localhost:4000/feedback/update/${props.match.params.id}`,formdata).then(res=>{
    
         console.log(res.data)
        
         })

         toast.success('Updated FeedBack');
       }
       catch(err){
    
        console.log(err)
       }
    
      
    }

   

    
  
    
    return (
       
      <div className="ripe-malinka-gradient">
         <NavbarPage/>
          <ToastContainer />
            <br>
            </br>
        <div classfname="items-feedback" style={{left:"60rem"}}>
          
   
        

       

        <MDBContainer>
 <MDBRow>
   <MDBCol md="6">
     <MDBCard style={{width:"50rem",left:"8rem"}}>
       <MDBCardBody>
           <center>
           <MDBCardHeader className="form-header ripe-malinka-gradient rounded" style={{width:"35rem",top:20} }>
           <h3 className="my-3">
           <MDBIcon icon="chalkboard-teacher" /> Edit Feedback
           </h3>
          
         </MDBCardHeader>
         
         </center>
        
         <br></br>
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
              <input type="text" id="form6Example1" className="form-control" value={fname} onChange={(e)=>{
                setfname(e.target.value)
              }}/>
              <label className="form-label" htmlFor="form6Example1">First name</label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form6Example2" className="form-control"  value={lname} onChange={(e)=>{
                setlname(e.target.value)
              }}/>
              <label className="form-label" htmlFor="form6Example2">Last name</label>
            </div>
          </div>
        </div>
   
        {/* Text input */}
        <div className="form-outline mb-4">
          <input type="text" id="form6Example4" className="form-control" value={address} onChange={(e)=>{
                setaddress(e.target.value)
              }}/>
          <label className="form-label" htmlFor="form6Example4">Address</label>
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
        <button type="submit" className="btn btn-primary  ripe-malinka-gradient btn-block mb-4  rounded-pill" style={{width:"30rem"}}>Update </button>
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
    )
}
