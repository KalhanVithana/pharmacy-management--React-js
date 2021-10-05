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
import { ToastContainer, toast } from 'react-toastify';
import Header from '../headers/Header';



export default function Order(props) {

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
    
    const total = quty * price;
    useEffect(async () => {


        await axios.get(`http://localhost:4000/user/all/${props.match.params.id}`).then(res => {


            setproductNO(res.data.productNO)
            setproductname(res.data.productname)
            setprice(res.data.price)
            setquty(res.data.quty)
            setdescription(res.data.description)
            setproduct(res.data);
            

            console.log(res.data)



        })


    }, [])


    const Validate = () => {
        let error = false;
        if (!name || !email || !nic || !mobile||!address) {
          error = true;
    
          toast.warn('all details  mujst require')
    
    
    
    
    
        }
    
    
        if (name) {
    
    
          if (name.length < 3) {
            error = true;
    
            toast.warn(' Name at least 3 Characters')
    
          }
        }
    
    
        if (email) {
    
    
          if (email.indexOf("@") === -1) {
            error = true;
    
            toast.warn('please Enter the Valid Email')
    
          }
        }
    
    
        if (mobile) {
    
    
          if (mobile < 11) {
            error = true;
    
            toast.warn('please Enter the Valid Mobile')
    
          }
        }
    
        if (nic) {
    
    
          if (nic < 10) {
            error = true;
    
            toast.warn('please enter the Valid nic')
    
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

    const submit = async (e) => {

        e.preventDefault();
        if (!Validate()) {

            try {
    
    
    
    
    
                const formdata = {productNO,productname,price, quty,name, email, nic, mobile, address,total,image }
    
    
    
                await axios.post('http://localhost:4000/order/add', formdata).then(res => {
    
                    console.log(res.data)
    
                })
    
               
            }
            catch (err) {
    
                console.log(err)
            }
    
            toast.success('data Added Sucessfully');
    
        


        }
       
    }




    const images = `../${setdata.filename}`
    const image =setdata.filename




    return (

        <div>


          
            
            <ToastContainer />

            <title>LifeCheck </title>
       
       <link rel="shortcut icon" href="img/short.ico" />
       <div className="wrapper">
         <div className="top-bar clearfix">
           <div className="top-bar-links">
             <ul>
               <li><a href="#">Sign Up</a></li>
               <li><a href="#">Log In</a></li>
             </ul>
           </div> {/* top-bar-links */}
           <div className="top-bar-links-left">
             <p>Pharmacy Hotline : 071 9 774 774</p>
           </div>
           <div className="site-search">
             <form method="get" action="index.html">
               <input type="search" name="search-box" />
               <button type="submit" />
             </form>
           </div> {/* site-search */}
         </div> {/* top-bar */}
         <header className="clearfix">
           <div className="logo">
             <img src="https://i.pinimg.com/originals/26/a5/e1/26a5e1a57b0780c92bfa275431631b36.jpg" height="150px" width="300px" />
           </div> {/* logo */}
           <div className="socialmedia">
             <ul>
               <li><a href="#"><i className="fa fa-linkedin fa-fw" aria-hidden="true" /></a></li>
               <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
               <li><a href="#"><i className="fa fa-pinterest fa-fw" aria-hidden="true" /></a></li>
               <li><a href="#"><i className="fa fa-google-plus fa-fw" aria-hidden="true" /></a></li>
               <li><a href="#"><i className="fa fa-rss fa-fw" aria-hidden="true" /></a></li>
             </ul>
           </div> {/* socialmedia */}
         </header>
        </div >
         <nav className="purple-gradient">
           <ul>
             <li className ="nav-ux"><a className ="nav-ux" href="#">Home</a></li>
             <li className ="nav-ux"><a className ="nav-ux" href="/pharmas">Pharmaceutical</a></li>
             <li className ="nav-ux"><a  className ="nav-ux"href="/echannel">About US</a></li>
             <li className ="nav-ux"><a  className ="nav-ux"href="/Product">My Account</a></li>
             <li className ="nav-ux"><a className ="nav-ux" href="/contact">Contact</a></li>
           </ul>
            
         
         </nav>  
         
         <div className="morpheus-den-gradient">
                <br></br><br></br>
                <h1>


                    

                    <div lassName="card-jsx ">



                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="6">
                                    <MDBCard style={{ width: "60rem", height: "100rem" }}>
                                        <MDBCardBody className="cards">
                                            <center>
                                                <MDBCardHeader className="form-header peach-gradient rounded" style={{ width: "45rem", top: 20 }}>
                                                    <h3 className="my-3 ">
                                                    <MDBIcon icon="arrow-alt-circle-up" /> Order Now
                                                      
                                                    </h3>

                                                </MDBCardHeader>
                                                <br></br>
                                          

                                                <Card.Img className="boarder" variant="top" src={images} alt='...' />
                                                <br></br>
                                                <br></br>
                                            </center>
                                            <form onSubmit={submit}>
                                                <div className="grey-text">
                                                    <MDBInput
                                                        label=" product no"
                                                        icon="address-card"
                                                        disabled
                                                        group
                                                        type="text"
                                                        validate
                                                        error="wrong"
                                                        success="right"
                                                        value={productNO}
                                                    />

                                                    <MDBInput
                                                        label=" product Name"
                                                        icon="capsules"
                                                        disabled
                                                        group
                                                        type="text"
                                                        validate
                                                        error="wrong"
                                                        success="right"
                                                        value={productname}

                                                    />
                                                     <MDBInput
                                                        label=" description"
                                                        icon="address-card"
                                                        disabled
                                                        group
                                                        type="text"
                                                        validate
                                                        error="wrong"
                                                        success="right"
                                                        value={description}
                                                    />

                                                    <MDBInput
                                                        label="price"
                                                        icon="dollar-sign"
                                                        group
                                                        disabled
                                                        type="text"
                                                        validate
                                                        value={price}

                                                    />


                                                    <MDBInput style={{ width: "20rem" }}
                                                        label="Quantity"
                                                        icon="list-ol"
                                                        group
                                                        type="number"
                                                        validate
                                                        value={quty}
                                                        onChange={(e) => {

                                                            setquty(e.target.value)
                                                        }}
                                                    />

                                                    <MDBInput style={{ width: "20rem" }}
                                                        label="total"
                                                        icon="ffas fa-plus"
                                                        disabled
                                                        group
                                                        type="number"
                                                        validate
                                                        value={total}
                                                     

                                                    />



                                                    <input
                                                        label="name"
                                                        type="text"
                                                        id="defaultFormRegisterPasswordEx4"
                                                        className="form-control"
                                                        value={name}
                                                        onChange={(e) => {

                                                            setname(e.target.value)
                                                        }}

                                                        placeholder="enter your name "
                                                        required
                                                    />

                                                    <br></br>
                                                    <input
                                                        label="email"
                                                        type="text"
                                                        id="defaultFormRegisterPasswordEx4"
                                                        className="form-control"
                                                        value={email}
                                                        onChange={(e) => {
                                                            setemail(e.target.value)

                                                        }}

                                                        placeholder="enter your email "
                                                        required
                                                    />
                                                     <input
                                                        label="email"
                                                        type="text"
                                                        value={image}
                                                        id="defaultFormRegisterPasswordEx4"
                                                        className="form-control"
                                                       hidden

                                                        placeholder="enter your email "
                                                        required
                                                    />

                               
                                                          

                                                    <br></br>


                                                    <MDBRow>
                                                        <MDBCol md="4" className="mb-3">

                                                            <input
                                                                label="name"
                                                                type="text"
                                                                id="defaultFormRegisterPasswordEx4"
                                                                className="form-control"
                                                                value={nic}
                                                                onChange={(e) => {
                                                                    setnic(e.target.value)

                                                                }}

                                                                placeholder="NIC "
                                                                required
                                                            />
                                                        
                                                        </MDBCol>
                                                        <MDBCol md="4" className="mb-3">

                                                            <input

                                                                type="text"
                                                                id="defaultFormRegisterPasswordEx4"
                                                                value={mobile}
                                                                onChange={(e) => {
                                                                    setmobile(e.target.value)

                                                                }}

                                                                className="form-control"
                                                                name="NIC"
                                                                placeholder="mobile"
                                                                required
                                                            />

                                                        </MDBCol>
                                                        <MDBCol md="4" className="mb-3">

                                                            <input
                                                                label="name"
                                                                type="text"
                                                                id="defaultFormRegisterPasswordEx4"
                                                                value={address}
                                                                onChange={(e) => {
                                                                    setaddress(e.target.value)

                                                                }}
                                                                className="form-control"
                                                                name="address"
                                                                placeholder="adress"
                                                                required
                                                            />

                                                            <div className="valid-feedback">Looks good!</div>
                                                        </MDBCol>
                                                    </MDBRow>





                                                </div>



                                                <div className="text-center mt-4">
                                                    <button type="submit" className="btn btn-danger  rounded-pill">Order now</button>
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

                    <br></br>
                    <br></br>   <br></br>
                    <br></br>
                    <br></br>
            
                    <br></br>
            
                </h1>
            </div>

                                                              


        </div>
    )
}
