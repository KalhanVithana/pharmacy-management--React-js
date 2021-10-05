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
import TableRow from './Tablerow';



export default function GetPharmacy() {
     
    const[product,setproduct]= useState('');
    const[qunty,setqunty]= useState('');
    const[total,settotal]= useState('');
    const[company,setcompany]= useState('');
    const[country,setcountry]= useState('');
    const[date,setdate]= useState('');
    const[type,settype] = useState('')
    

    const [getdata, setdata] = useState([]);



    useEffect(async () => {


        await axios.get(`http://localhost:4000/pharmacy/`).then(res => {
  
            setdata(res.data);
            console.log(res.data)
        })
      

    }, [])



const PharmacyGet = ()=>{

    return  getdata.map((res,i)=>{

        return <TableRow key={i} obj={res}/>
    })
}

  


    return (
        <div className="ripe-malinka-gradient">
            <NavbarPage/>
            
           
            <MDBCard style={{ width: "70rem", left: "16rem", top: "5rem" }}>

  
    <table class="table table-hover">
  

        <thead class="table-blue">
            <tr>

             
                <th scope="col">product</th>
                <th scope="col">qunty</th>
                <th scope="col"> total</th>
                <th scope="col">company</th>
                <th scope="col">country </th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
             
          
            </tr>
        </thead>
        <tbody>

        {PharmacyGet()}
          

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
