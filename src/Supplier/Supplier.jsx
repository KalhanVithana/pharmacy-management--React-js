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


export default function EditProduct(props) {


  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [address, setaddress] = useState('');
  const [mobile, setmobile] = useState('');
  const [Supply, setSupply] = useState('');
  const [description, setdescription] = useState('');
  const [gender, setgender] = useState('')






  const Validate = () => {
    let error = false;
    if (!name || !email || !Supply || !mobile || !address || !description) {
      error = true;

      toast.warn('all details  must require')





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


      if (mobile < 10) {
        error = true;

        toast.warn('please Enter the Valid Mobile')

      }
    }

    if (description) {


      if (description < 3) {
        error = true;

        toast.warn('please enter Clear Description')

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


        const formdata = {

          name,
          email,
          address,
          mobile,
          Supply,
          description
        }







        await axios.post(`http://localhost:4000/supplier/add`, formdata).then(res => {

          console.log(res.data)

        })

        toast.success('Thank you for your  Registration');
      }
      catch (err) {

        console.log(err)
      }

    }
  }






  return (

    <div>

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
          <li className="nav-ux"><a className="nav-ux" href="#">Home</a></li>
          <li className="nav-ux"><a className="nav-ux" href="/pharmas">Pharmaceutical</a></li>
          <li className="nav-ux"><a className="nav-ux" href="/echannel">About us</a></li>
          <li className="nav-ux"><a className="nav-ux" href="/Product">My Account</a></li>
          <li className="nav-ux"><a className="nav-ux" href="/contact">Contact</a></li>
        </ul>


      </nav>


      <ToastContainer />
      <br>
      </br>
      <div className="morpheus-den-gradient">

        <br></br>
        <br></br>
        <div className="items">






          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard style={{ width: "50rem" }}>
                  <MDBCardBody  >
                    <center>
                      <MDBCardHeader className="form-header blue-gradient rounded" style={{ width: "35rem", top: 20 }}>
                        <h3 className="my-3">
                          <MDBIcon far icon="address-card" /> Register Supplier
                        </h3>

                      </MDBCardHeader>
                      <br></br>
                    </center>
                    <div>


                    <br></br>
                    <center>

                          <img src={"https://michiganross.umich.edu/sites/default/files/images/news-story/handshaketrust.jpg"} alt="..." style={{ width: "40rem", left: "60rem" }} />
                          </center>
                      

                    </div>
                    <form onSubmit={submit} enctype="multipart/form-data">
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
                          onChange={(e) => {
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
                          onChange={(e) => {

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
                          onChange={(e) => {

                            setaddress(e.target.value)
                          }}

                        />


                        <MDBInput style={{ width: "20rem" }}
                          label="mobile"
                          icon="calendar-alt"
                          group
                          type="text"
                          validate
                          value={mobile}
                          onChange={(e) => {

                            setmobile(e.target.value)
                          }}
                        />

                        <br></br>


                        <select className="form-select" aria-label="Default select example" style={{ width: "25rem" }} value={Supply}
                          onChange={(e) => {

                            setSupply(e.target.value)


                          }}>
                          <option selected>select Type </option>
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
                        onChange={(e) => {

                          setdescription(e.target.value)
                        }}
                      />
                      <div className="text-center mt-4">
                        <button type="submit" className="btn btn-success purple-gradient rounded-pill">Register </button>
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

    
     
    </div>
  )
}
