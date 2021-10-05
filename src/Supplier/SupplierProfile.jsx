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



export default function SupplierProfile(props) {

    
    const[name,setname]= useState('');
    const[email,setemail]= useState('');
    const[address,setaddress]= useState('');
    const[mobile,setmobile]= useState('');
    const[Supply,setSupply]= useState('');
    const[description,setdescription]= useState('');
    const[gender,setgender] = useState('')
    

    useEffect(async () => {


        await axios.get(`http://localhost:4000/supplier/getSupllier/${props.match.params.id}`).then(res => {

            setname(res.data.name);
            setemail(res.data.email);
            setaddress(res.data.address);
            setmobile(res.data.mobile);
            setSupply(res.data.Supply);
            setdescription(res.data.description);
         




        })
      

    }, [])



    const submit= async()=>{

   
    
      
    
       try{
      
    
    const  formdata  = {

        name,
        email,
       address,
         mobile,
         Supply,
       description
    }
    
        
       
       
    
       
       
         await axios.put(`http://localhost:4000/supplier/update/${props.match.params.id}`,formdata).then(res=>{
    
         console.log(res.data)
        
         })
         toast.success('data update Sucessfully');
       }
       catch(err){
    
        console.log(err)
       }
    
    
    }

   

    
  
    
    return (
       
        <div className="purple-gradient">
          <NavbarPage/>
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
         <MDBCardHeader className="form-header purple-gradient rounded" style={{width:"35rem",top:20} }>
           <h3 className="my-3">
           <MDBIcon far icon="address-card" />  Edit Supplier
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
         <form onSubmit={submit}enctype="multipart/form-data">
           <div className="grey-text">
             <MDBInput 
               label=" Supplier Name"
               icon="address-card"
               group
               type="text"
               validate
               error="wrong"
               success="right"
               value={name}
               onChange={(e)=>{
                   setname(e.target.value)
               }}
             />

               <MDBInput
               label=" Supplier Email"
               icon="capsules"
               group
               type="text"
               validate
               error="wrong"
               success="right"
               value={email}
               onChange={(e)=>{

                   setemail(e.target.value)
               }}
             />
             
             <MDBInput
               label="address"
               icon="arrow-alt-circle-up"
               group
               type="text"
               validate
               value={address}
               onChange={(e)=>{

                   setaddress(e.target.value)
               }}

             />
       
        
       <MDBInput style={{width:"20rem"}}
               label="mobile"
               icon="calendar-alt"
               group
               type="text"
               validate
               value={mobile}
               onChange={(e)=>{

                   setmobile(e.target.value)
               }}
             />


       <br></br>

      
        <select className="form-select" aria-label="Default select example" style={{width:"25rem"}}   value={Supply}
               onChange={(e)=>{

                   setSupply(e.target.value)
                 
                 
               }}>
       <option selected>{Supply} </option>
       <option value="Medicine">Medicine</option>
       <option value="Suppliment">Suppliment</option>
       <option value="Researcher">Researcher</option>
        </select>

       
<br></br>
        
       
       
           </div>


        <br></br>
     

         <br>
         </br>
         <label htmlFor="exampleFormControlTextarea1">
       description
       </label>
       <textarea
       className="form-control"
       id="exampleFormControlTextarea1"
       rows="5"
       value={description}
       onChange={(e)=>{

           setdescription(e.target.value)
       }}
       />
         <div className="text-center mt-4">
         <button type ="submit" className="btn btn-success purple-gradient rounded-pill">Update </button>
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
        </div>
    )
}
