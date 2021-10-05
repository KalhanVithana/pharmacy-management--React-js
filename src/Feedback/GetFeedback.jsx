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
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import img from '../island.jpg'
import NavbarPage from '../Pages/NavbarPage';
import Footer from '../Pages/Footer';
import FeedbackTable from './FeedbackTable';
import Feedback from 'react-bootstrap/esm/Feedback';


export default function GetFeedback() {
     
    const[fname,setfname]= useState('');
    const[lname,setlname]= useState('');
    const[email,setemail]= useState('');
    const[address,setaddress]= useState('');
    const[mobile,setmobile]= useState('');
    const[description,setdescription]= useState('');
    

    const [getdata, setdata] = useState([]);



    useEffect(async () => {


        await axios.get(`http://localhost:4000/feedback/`).then(res => {
  
            setdata(res.data);
            console.log(res.data)
        })
      

    }, [])



const FeedBacks = ()=>{

    return  getdata.map((res,i)=>{

        return <FeedbackTable key={i} obj={res}/>
    })
}

  


    return (
        <div className="ripe-malinka-gradient">
            <NavbarPage/>
            
           
            <MDBCard style={{ width: "70rem", left: "16rem", top: "5rem" }}>

  
    <table class="table table-hover">
  

        <thead class="table-blue">
            <tr>

             
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col"> Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Address </th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
             

            </tr>
        </thead>
        <tbody>

        {FeedBacks()}
          

        </tbody>
    </table>

</MDBCard>

<div className="ripe-malinka-gradient">
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<br></br>
<br></br>
<br></br>




      
      
        </div>
        </div>
    )
}
