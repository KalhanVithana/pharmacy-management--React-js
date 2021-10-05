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
import DeliveryTableRow from './DeliveryTableRow';
import NavbarPage from '../Pages/NavbarPage';
import Footer from '../Pages/Footer';
import jsPDF from 'jspdf'; 
import 'jspdf-autotable';

export default function DeliveryData() {
    const [productNO, setproductNO] = useState('');
    const [productname, setproductname] = useState('');
    const [name, setname] = useState('');
    const [quty, setquty] = useState('');
    const [mobile, setmobile] = useState('')
    const [address, setaddress] = useState("")
    const [total, settotal] = useState("")
    const [deliverName, setdeliverName] = useState("")
    const [type, settype] = useState("")
    const [charges, setcharges] = useState("")
    const [area, setarea] = useState("")
    const[search,setsearch] = useState('')

    const [getdata, setdata] = useState([]);



    useEffect(async () => {


        await axios.get(`http://localhost:4000/Delivery/`).then(res => {


            setproductNO(res.data.productNO)
            setproductname(res.data.productname)
            setquty(res.data.quty)
            setaddress(res.data.address)
            settotal(res.data.total)
            setname(res.data.name)
            setmobile(res.data.mobile)
            setdata(res.data);
         




        })
      

    }, [])

    const generatePDF = () => {

        const unit = "pt";
    
        const size = "A3"; 
    
        const orientation = "landscape"; 
    
        const marginLeft = 40;
    
        const doc = new jsPDF( orientation, unit, size );
    
    
        const title = "Delivery  Report ";
    
        const headers = [["productname ","delivername","name","mobile","area"]];
        
    
        const PDF = getdata.map(
    
          getdata=>[
    
           getdata.productname,
           getdata.delivername,
            getdata.name,
           getdata.mobile,
           getdata.area,
         
    
           
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
    
        doc.save( "Deliver Report.pdf" )
    
    }

    const DataTables = ()=>{

        return SearchProducts.map((res,i)=>{
          return <DeliveryTableRow key={i}  obj={res} />
      })
      }
      
      
      const SearchProducts = 
           getdata.filter(user=>{
      
              if(!user.productname){
                  return console.log("not found")
              }
              return user.productname.toLowerCase().includes(search.toLowerCase());
           })


    return (
        <div className="ripe-malinka-gradient">
            <NavbarPage/>
            
           
            <MDBCard style={{ width: "70rem", left: "16rem", top: "5rem" }}>

            <input type="text" value={search} onChange={e => { setsearch(e.target.value) }} style={{ width: "30rem",height:"3rem" }} placeholder="search Product Name"></input>
          <button onClick={generatePDF} type="primary"  class="btn btn-info" style ={{width:"20rem"}}>Download  report</button> 
    <table class="table table-hover">
  

        <thead class="table-blue">
            <tr>

             
                <th scope="col">productname</th>
                <th scope="col">Deliver Name</th>
                <th scope="col"> Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Area </th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
             

            </tr>
        </thead>
        <tbody>

            {DataTables()}

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
