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
import NavbarPage from '../Pages/NavbarPage';
import { useState } from 'react';
import TableOrder from './TableOrder';
import axios from 'axios'
import jsPDF from 'jspdf'; 
import 'jspdf-autotable';
import { useEffect } from 'react';


export default function Orderlist() {

    const [productNO, setproductNO] = useState('');
    const [productname, setproductname] = useState('');
    const [price, setprice] = useState('');
    const [name, setname] = useState('');
    const [quty, setquty] = useState('');
    const [description, setdescription] = useState('');
    const [email, setemail] = useState('')
    const [nic, setnic] = useState('')
    const [mobile, setmobile] = useState('')
    const [address, setaddress] = useState("")
    const [setdata, setproduct] = useState([]);
    const [search, setsearch] = useState('');




    useEffect(async () => {


        await axios.get('http://localhost:4000/order/').then(res => {


            setproductNO(res.data.productNO)
            setproductname(res.data.productname)
            setprice(res.data.price)
            setquty(res.data.quty)
            setproduct(res.data);

            console.log(res.data)



        })


    }, [])


    const DataTable = () => {

        return GetData.map((res, i) => {
            return <TableOrder key={i} obj={res} />

        })
    }



    const GetData =

        setdata.filter((res, i) => {

            if (!res.productname) {
                return null;

            }

            else {
                return res.productname.toLowerCase().includes(search.toLowerCase());
            }
        })


        const generatePDF = () => {

            const unit = "pt";
        
            const size = "A3"; 
        
            const orientation = "landscape"; 
        
            const marginLeft = 40;
        
            const doc = new jsPDF( orientation, unit, size );
        
        
            const title = "Order  Report ";
        
            const headers = [["productNO ","productname ","price","name","email"]];
            
        
            const PDF = setdata.map(
        
                setdata=>[
        
                    setdata.productNO,
                    setdata.productname,
                    setdata.price,
                    setdata.name,
                    setdata.email,
            
             
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
        
            doc.save( "OrderReport.pdf" )
        
        }
        


    return (
        <div  className="purple-gradient">
            <NavbarPage />

            <br></br>
            <br></br>
            <br></br>
            
            <center>

            <a>
                <MDBCard style={{ width: "70rem", left: "5rem", top: "5rem" }}>

                <input type="text" value={search} onChange={e => { setsearch(e.target.value) }} style={{ width: "30rem",height:"3rem" }} placeholder="search Product Name"></input>
          <button onClick={generatePDF} type="primary"  class="btn btn-info" style ={{width:"20rem"}}>Download  report</button> 

                    <table class="table table-hover">
                  

                        <thead class="table-blue">
                            <tr>

                                <th scope="col">productNO:</th>
                                <th scope="col">productname</th>
                                <th scope="col">price</th>
                                <th scope="col">total</th>
                                <th scope="col">Name</th>
                                <th scope="col">email</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Deliver</th>

                            </tr>
                        </thead>
                        <tbody>

                            {DataTable()}

                        </tbody>
                    </table>
                </MDBCard>

                </a>
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
                <br></br>
                

                

            </center>

            

        </div>
    )
}
