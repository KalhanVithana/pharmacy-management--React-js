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


export default function EditPharmaceutical(props) {


  const [product, setproduct] = useState('');
  const [qunty, setqunty] = useState('');
  const [total, settotal] = useState('');
  const [company, setcompany] = useState('');
  const [country, setcountry] = useState('');
  const [date, setdate] = useState('');
  const [type, settype] = useState('')




  useEffect(async () => {


    await axios.get(`http://localhost:4000/pharmacy/pharma/${props.match.params.id}`).then(res => {

      setproduct(res.data.product);
      setqunty(res.data.qunty);
      settotal(res.data.total);
      setcompany(res.data.company);
      setcountry(res.data.country);
      settype(res.data.type);
      setdate(res.data.date)





    })


  }, [])



  const submit = async (e) => {


    e.preventDefault();



    try {


      const formdata = {

        product,
        qunty,
        total,
        company,
        country,
        date,
        type
      }







      await axios.put(`http://localhost:4000/pharmacy/update/${props.match.params.id}`, formdata).then(res => {

        console.log(res.data)

      })
      toast.success('data update Sucessfully');
    }
    catch (err) {

      console.log(err)
    }


  }






  return (

    <div className="morpheus-den-gradient">
      <NavbarPage />
      <ToastContainer />
      <br>
      </br>
      <div className="items">






        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <MDBCard style={{ width: "50rem" }}>
                <MDBCardBody>
                  <center>
                    <MDBCardHeader className="form-header deep-blue-gradient rounded" style={{ width: "35rem", top: 20 }}>
                      <h3 className="my-3">
                        <MDBIcon icon="mortar-pestle" /> Edit Pharmaceutical items
                      </h3>

                    </MDBCardHeader>
                    <br></br>
                  </center>
                  <div>
                    <center>

                      <div class="card" style={{ width: "18rem" }}>


                      </div>
                    </center>
                  </div>
                  <form onSubmit={submit} enctype="multipart/form-data">
                    <div className="grey-text">
                      <MDBInput
                        label=" product Name"
                        icon="address-card"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value={product}
                        onChange={(e) => {
                          setproduct(e.target.value)
                        }}
                      />

                      <MDBInput
                        label=" product quantity"
                        icon="capsules"
                        group
                        type="number"
                        validate
                        error="wrong"
                        success="right"
                        value={qunty}
                        onChange={(e) => {

                          setqunty(e.target.value)
                        }}
                      />

                      <MDBInput
                        label="total price"
                        icon="dollar-sign"
                        group
                        type="number"
                        validate
                        value={total}
                        onChange={(e) => {

                          settotal(e.target.value)
                        }}

                      />

                      <MDBInput
                        label="company name"
                        icon="sign"
                        group
                        type="text"
                        validate
                        value={company}
                        onChange={(e) => {

                          setcompany(e.target.value)
                        }}

                      />


                      <MDBInput style={{ width: "20rem" }}
            
                        icon="list-ol"
                        group
                        type="date"
                        validate
                        value={date}
                        onChange={(e) => {

                          setdate(e.target.value)
                        }}
                      />


                      <br></br>


                      <select className="form-select" aria-label="Default select example" style={{ width: "25rem" }} value={country}
                        onChange={(e) => {

                          setcountry(e.target.value)


                        }}>
                        <option selected>{country} </option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                      </select>



                      <br></br>
                      <select className="form-select" aria-label="Default select example" style={{ width: "25rem" }} value={type}
                        onChange={(e) => {

                          settype(e.target.value)


                        }}>
                        <option selected>{type} </option>
                        <option value="Medicine">Medicine</option>
                        <option value="Suppliment">Suppliment</option>
                        <option value="Researcher">Researcher</option>
                      </select>


                    </div>


                    <br></br>



                    <div className="text-center mt-4">
                      <button type="submit" className="btn btn-success rounded-pill">Update </button>
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}
