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
import SupplierTable from './SupplierTable';
import NavbarPage from '../Pages/NavbarPage';
import jsPDF from 'jspdf'; 
import 'jspdf-autotable';

export default function GetSupplier() {
        const[name,setname]= useState('');
    const[email,setemail]= useState('');
    const[address,setaddress]= useState('');
    const[mobile,setmobile]= useState('');
    const[Supply,setSupply]= useState('');
    const[description,setdescription]= useState('');
    const[gender,setgender] = useState('')
    const [search, setsearch] = useState('');

    const [getdata, setdata] = useState([]);



    useEffect(async () => {


        await axios.get(`http://localhost:4000/supplier/`).then(res => {

            setdata(res.data);
         




        })
      

    }, [])


    const generatePDF = () => {

        const unit = "pt";
    
        const size = "A3"; 
    
        const orientation = "landscape"; 
    
        const marginLeft = 40;
    
        const doc = new jsPDF( orientation, unit, size );
    
    
        const title = "Supplier  Report ";
    
        const headers = [["Supplier Name","Supplier email","address","mobile","Supply"]];
        
    
        const PDF = getdata.map(
    
          getdata=>[
    
           getdata.name,
           getdata.email,
            getdata.address,
           getdata.mobile,
           getdata.Supply,
           
         
            ]
    
        );
    
    
    
        let content = {
    
            startY: 50,
    
            head: headers,
    
            body: PDF
    
        };
    
        doc.setFontSize( 20 );
    
        doc.text( title, marginLeft, 40 );
    
        require('jspdf-autotable');
    
        doc.autoTable( content );
    
        doc.save( "SupplierReport.pdf" )
    
    }
    

    const DataTables = ()=>{

        return SearchSupplier.map((res,i)=>{
          return <SupplierTable key={i}  obj={res} />
      })
      }
      
      
      const SearchSupplier = 
           getdata.filter(user=>{
      
              if(!user.name){
                  return console.log("not found")
              }
              return user.name.toLowerCase().includes(search.toLowerCase());
           })


    return (
        <div  className="purple-gradient">
            <NavbarPage/>

      
            <MDBCard style={{ width: "70rem", left: "16rem", top: "5rem" }}>

                
            <input type="text" value={search} onChange={e => { setsearch(e.target.value) }} style={{ width: "30rem",height:"3rem" }} placeholder="search Product Name"></input>
          <button onClick={generatePDF} type="primary"  class="btn btn-info" style ={{width:"20rem"}}>Download  report</button> 

    <table class="table table-hover">
  
        <thead class="table-blue">
            <tr>

                <th scope="col">  Name</th>
                <th scope="col"> Email</th>
                <th scope="col"> Addres</th>
                <th scope="col">Mobile</th>
                <th scope="col">Supply </th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
             

            </tr>
        </thead>
        <tbody>

            {DataTables()}

        </tbody>
    </table>
</MDBCard>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>  <br></br>
        <br></br>
        <br></br>  <br></br>
        <div  className="purple-gradient">
            <h1></h1>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>  <br></br>
        <br></br>
        <br></br>  <br></br>

        </div>
    )
}
