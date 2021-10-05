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
import { IoIosPricetag } from "react-icons/io";
import { FaWindows } from "react-icons/fa";



export default function Stock(props) {



  const [productname, setproductname] = useState('');

  const [message, setmessage] = useState('');
  const [quty, setquty] = useState('');
  const [price, setprice] = useState('');
  let [stockname, setstockname] = useState();
  const [isError] = useState(false)
  const [getdata, setdata] = useState([]);




  useEffect(async () => {


    await axios.get('http://localhost:4000/stock/', getdata).then(res => {


      console.log(res.data)
      setdata(res.data);
    })

  }, [])


  const GetStocks = () => {

    return getdata.map((res, i) => {

      return <TableStock key={i} obj={res} />
    })
  }


  const Validate = () => {
    let error = false;
    if (!productname || !price || !quty || !message) {
      error = true;

      toast.warn('all details  mujst require')





    }


    if (productname) {


      if (productname.length < 7) {
        error = true;

        toast.warn('product Name at least ^ Characters')

      }
    }


    if (quty) {


      if (quty < 0) {
        error = true;

        toast.warn('please Enter the Valid Quantity')

      }
    }


    if (price) {


      if (price < 0) {
        error = true;

        toast.warn('please Enter the Valid Price')

      }
    }

    if (message) {


      if (message < 5) {
        error = true;

        toast.warn('please enter the Clear Message')

      }
    }


    return error;


  }




  const submit = async (e) => {

    e.preventDefault();



    if (!Validate()) {

      try {





        const formdata = {
          productname, price, message, quty
        }



        await axios.post('http://localhost:4000/stock/add', formdata).then(res => {

          console.log(res.data)

        })
      }
      catch (err) {

        console.log(err)
      }

      toast.success('data Added Sucessfully');
      //window.location='/'
    }

  }



  return (

    <div className="morpheus-den-gradient">
      <NavbarPage />
      <ToastContainer />
      <br></br>
      <div className="items">


        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <MDBCard style={{ width: "50rem" }}>
                <MDBCardBody className="cards">
                  <center>
                    <MDBCardHeader className="form-header deep-blue-gradient rounded" style={{ width: "35rem", top: 20 }}>
                      <h3 className="my-3">
                        <MDBIcon fab icon="medrt" /> Stock Review
                      </h3>

                    </MDBCardHeader>

                    <br></br>
                  </center>
                  <form onSubmit={submit}>
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
                        onChange={(e) => {

                          setproductname(e.target.value)
                        }}

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


                      <MDBInput
                        label="price"
                        icon="dollar-sign"

                        group
                        type="text"
                        validate
                        value={price}
                        onChange={(e) => {

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
                      onChange={(e) => {

                        setmessage(e.target.value)
                      }}
                    />
                    <div className="text-center mt-4">
                      <button type="submit" className="btn btn-success  rounded-pill">Submit</button>
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


        <br>
        </br>


        <MDBCard style={{ width: "70rem" }}>

          <table class="table table-hover">
            <thead class="table-blue">
              <tr>


                <th scope="col">productname</th>
                <th scope="col">price:</th>
                <th scope="col">quintity</th>
                <th scope="col">message</th>
                <th scope="col">edit</th>
                <th scope="col">Delete</th>

              </tr>
            </thead>
            <tbody>


              {GetStocks()}
            </tbody>
          </table>
        </MDBCard>

        <br></br>
        <br></br>


      </div>

    </div>
  )
}
