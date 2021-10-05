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
import Tablerow from './Tablerow';
import NavbarPage from "../Pages/NavbarPage"



export default function EditProduct(props) {

    
    const[productNO,setproductNO]= useState('');
    const[productname,setproductname]= useState('');
    const[price,setprice]= useState('');
    const[category,setcategory]= useState('');
    const[quty,setquty]= useState('');
    const[description,setdescription]= useState('');
    const[search,setsearch] = useState('')
    const[filename,setfilename] =useState("")
    const[getproduct,setgetproduct]= useState([]);


    const submit= async()=>{

        console.log("call")
    
      
    
       try{
        // const formdata = new FormData();
    
    const  formdata  = new FormData();
    
        
        formdata.append("productNO",productNO);
         formdata.append("productname",productname);
        formdata.append("price",price);
        formdata.append("category",category);
        formdata.append("quty",quty);
        formdata.append("description",description);
        formdata.append("filename",filename);
    
       
       
         await axios.put(`http://localhost:4000/user/update/${props.match.params.id}`,formdata).then(res=>{
    
         console.log(res.data)
        
         })
       }
       catch(err){
    
        console.log(err)
       }
    
    
    }

    useEffect(async() => {
      

         await axios.get(`http://localhost:4000/user/edit/${props.match.params.id}`).then(res=>{

         
         setproductNO(res.data.productNO)
         setproductname(res.data.productname)
         setcategory(res.data.category)
         setprice(res.data.price)
         setquty(res.data.quty)
         setdescription(res.data.description)
         setgetproduct(res.data);
      
    


     })

     
    }, [])


 const image = `../${getproduct.filename}`

    
  
    
    return (
       
        <div className="morpheus-den-gradient">
          <NavbarPage/>
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
             <MDBIcon fab icon="medrt" /> Edit Products
           </h3>
          
         </MDBCardHeader>
         <br></br>
         </center>
         <div>
        <center>
            
         <div class="card" style={{width: "18rem"}}>
         
         <img src ={image}  alt="..." style={{width:300}} />
  
                </div>
                </center>
                </div>
         <form onSubmit={submit}enctype="multipart/form-data">
           <div className="grey-text">
             <MDBInput 
               label=" product no"
               icon="address-card"
               group
               type="text"
               validate
               error="wrong"
               success="right"
               value={productNO}
               onChange={(e)=>{
                   setproductNO(e.target.value)
               }}
             />

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


       <br></br>

      
        <select className="form-select" aria-label="Default select example" style={{width:"25rem"}}   value={category}
               onChange={(e)=>{

                   setcategory(e.target.value)
                   console.log(category)
                 
               }}>
       <option selected>{category}</option>
        <option value="OTC/VMS">OTC/VMS</option>
        <option value="Personal hygiene">Personal hygiene</option>
         <option value="Food and beverages">Food and beverages</option>
        </select>

       
<br></br>
        
       
       
           </div>


        <br></br>
       <label for="exampleFormControlFile1">upload photo</label>
       <input type="file" filename="filename" className="form-control-file" onChange={(e)=>{
                 setfilename(e.target.files[0])

               
               }}></input>

         <br>
         </br>
         <label htmlFor="exampleFormControlTextarea1">
       Description
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
         <button type ="submit" className="btn btn-success  rounded-pill">Update Product</button>
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
