import React from "react";
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
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tablerow from "./Tablerow";
import NavbarPage from "../Pages/NavbarPage"
import TableStock from "./TableStock";
import { ToastContainer, toast } from 'react-toastify';


// productNO
// productname
// description

// avalibility
// price
// category

// quty
// message

export default function Updatestock(props) {



      const[productname,setproductname]= useState('');
    
    const[message,setmessage]= useState('');
    const[quty,setquty]= useState('');
    const[price,setprice]= useState('');
  const [getdata,setdata] = useState([]);
 


    
  useEffect(async()=>{


    await axios.get(`http://localhost:4000/stock/edits/${props.match.params.id}`).then(res=>{

   
    setdata(res.data);
    setproductname(res.data.productname)
    setprice(res.data.price)
    setquty(res.data.quty)
    setmessage(res.data.message)
  
    })

  },[])


  

const submit= async(e)=>{

    console.log("call")

    e.preventDefault();;
   try{
  


    
   
   const formdata= {
    productname,price,message,quty
   }

   
   
     await axios.put(`http://localhost:4000/stock/update/${props.match.params.id}`,formdata).then(res=>{

     console.log(res.data)
    
     })
     toast.success(' Updated Sucessfully');
   }
   catch(err){

    console.log(err)
   }


}
  


    return (
    
      <div className="morpheus-den-gradient">
         <NavbarPage/>
         <ToastContainer />
        <br></br>
        <div className="items">


             <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard style={{width:"50rem"}}>
            <MDBCardBody className="cards">
                <center>
              <MDBCardHeader className="form-header deep-blue-gradient rounded" style={{width:"35rem",top:20} }>
                <h3 className="my-3">
                  <MDBIcon fab icon="medrt" /> Edit Stock Review
                </h3>
               
              </MDBCardHeader>
              <br></br>
              </center>
              <form onSubmit={submit}enctype="multipart/form-data">
                <div className="grey-text">
                 

                    <MDBInput
                    label=" product Name"
                    icon="capsules"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={productname}
                    onChange={(e)=>{

                        setproductname(e.target.value)
                    }}

                  />
                
                  <MDBInput style={{width:"20rem"}}
                    label="Quantity"
                    icon="list-ol"
                    group
                    type="number"
                    validate
                    value={quty}
                    onChange={(e)=>{

                        setquty(e.target.value)
                      
                    }}
                  />
                   
                
                  <MDBInput 
                    label="price"
                    icon="dollar-sign"
                  
                    group
                    type="text"
                    validate
                    value={price}
                    onChange={(e)=>{

                        setprice(e.target.value)
                        
                      
                      
                    }}
                    

                  />
              
                    

                

                  

                 
             
    

            <br></br>

                </div>

              
              <label htmlFor="exampleFormControlTextarea1">
              message
            </label>
            <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            value={message}
            onChange={(e)=>{

                setmessage(e.target.value)
            }}
            />
              <div className="text-center mt-4">
              <button type ="submit" className="btn btn-success  rounded-pill">Update</button>
              </div>
              </form>
              <MDBModalFooter>
               
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

        <br>
        </br>


    
        </div>
      
        </div>
    )
}
