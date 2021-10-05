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
import NavbarPage from '../Pages/NavbarPage';




export default function Delivery(props) {

    const [productNO, setproductNO] = useState('');
    const [productname, setproductname] = useState('');
    const [name, setname] = useState('');
    const [quty, setquty] = useState('');
    const [mobile, setmobile] = useState('')
    const [address, setaddress] = useState("")
    const [total, settotal] = useState("")
    const [delivername, setdelivername] = useState("")
    const [type, settype] = useState("")
    const [charges, setcharges] = useState("")
    const [area, setarea] = useState("")
    const [filename, setfilename] = useState("")
    const[search,setsearch] = useState('')

    const [getdata, setdata] = useState([]);



    const Validate = () => {
        area,
        type,
        charges,
        delivername
        let error = false;
        if (!delivername || !area || !charges || !type||!address) {
          error = true;
    
          toast.warn('all details  mujst require')
    
    
    
    
    
        }
    
    
        if (delivername) {
    
    
          if (delivername.length < 3) {
            error = true;
    
            toast.warn(' Name at least 3 Characters')
    
          }
        }
    
    

     
    
        if (charges) {
    
    
          if (charges  < -1) {
            error = true;
    
            toast.warn('please enter the Valid Delivery Chargers')
    
          }


        }

  
    
        return error;
    
    
      }

    useEffect(async () => {


        await axios.get(`http://localhost:4000/Delivery/deliver/${props.match.params.id}`).then(res => {


    
            setproductname(res.data.productname)
            setquty(res.data.quty)
            setaddress(res.data.address)
            settotal(res.data.total)
            setname(res.data.name)
            setmobile(res.data.mobile)
            setdata(res.data)
           

           
         

        })
      

    }, [])



   


    const submit = async (e) => {

        e.preventDefault();
        if (!Validate()) {
        try {


            const formdata = {

               
                productname,
                quty,
                name,
                mobile,
                 address,
                total,
                area,
                type,
                charges,
                delivername,
                image
            }
            



            await axios.post('http://localhost:4000/Delivery/add', formdata).then(res => {

                console.log(res.data)

            })

            toast.success('data Added Sucessfully');
            
        }
        catch (err) {

            console.log(err)
        }
    }

    }




    
    const image = `../${getdata.image}`



    return (

        <div>


            <div className="purple-gradient">
                <NavbarPage/>

            <ToastContainer />




                <br></br>
                <br></br>
                <br></br>
                <br></br>
              

              




                    <div lassName="card-jsx ">


                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="6">
                                    <MDBCard style={{ width: "60rem" ,left:"7rem"}}>
                                        <MDBCardBody className="cards">
                                            <center>
                                                <MDBCardHeader className="form-header purple-gradient rounded" style={{ width: "45rem", top: 20 }}>
                                                    <h3 className="my-3">
                                                        <MDBIcon fab icon="fab fa-accusoft" /> Delivery Charges
                                                    </h3>

                                                </MDBCardHeader>
                                                <br></br>
                                               


                                                <Card.Img className="boarder" variant="top" src={image} alt='...' />
                                                <br></br>
                                                <br></br>
                                            </center>
                                            <form onSubmit={submit}>
                                                <div className="grey-text">
                                                 
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



                                                    <MDBInput style={{ width: "20rem" }}
                                                        label="Quantity"
                                                        icon="list-ol"
                                                        group
                                                        type="number"
                                                        validate
                                                        value={quty}
                                                        
                                                    />

                                                  



                                                    <label for="exampleInputEmail1"> Customer Address</label>
                                                    <input
                                                        label="email"
                                                        type="text"
                                                        disabled
                                                        id="defaultFormRegisterPasswordEx4"
                                                        className="form-control"
                                                        value={address}


                                                        placeholder="enter your email "
                                                        required
                                                    />




                                                    <br></br>


                                                    <MDBRow>
                                                        <MDBCol md="4" className="mb-3">
                                                            <label for="exampleInputEmail1"> Customer name</label>
                                                            <input
                                                                label="name"
                                                                type="text"
                                                                disabled
                                                                id="defaultFormRegisterPasswordEx4"
                                                                className="form-control"
                                                                value={name}
                                                                placeholder="NIC "
                                                                required
                                                            />
                                                       </MDBCol>
                                                        <MDBCol md="4" className="mb-3">
                                                            <label for="exampleInputEmail1"> Customer Mobile</label>
                                                            <input

                                                                type="text"
                                                                disabled
                                                                id="defaultFormRegisterPasswordEx4"
                                                                value={mobile}
                                                                className="form-control"
                                                                name="NIC"
                                                                placeholder="mobile"
                                                                required
                                                            />

                                                        </MDBCol>
                                                        <MDBCol md="4" className="mb-3">
                                                            <label for="exampleInputEmail1"> Total Price</label>
                                                            <input
                                                                label="name"
                                                                type="text"
                                                                disabled
                                                                id="defaultFormRegisterPasswordEx4"
                                                                value={total}
                                                                className="form-control"
                                                                name="address"
                                                                placeholder=""
                                                                required
                                                            />

                                                            <div className="valid-feedback">Looks good!</div>
                                                        </MDBCol>
                                                    </MDBRow>
                                                    <label for="exampleInputEmail1"> Deliver name</label>
                                                    <input
                                                        label="name"
                                                        type="text"

                                                        id="defaultFormRegisterPasswordEx4"
                                                        className="form-control"
                                                        value={delivername}
                                                        placeholder="Enter Deliver Name "
                                                        required
                                                        onChange={(e) => {
                                                            setdelivername(e.target.value)

                                                        }}
                                                    />
                                                     <br></br>
                                                    <select className="form-select" aria-label="Default select example" style={{ width: "25rem" }} value={area}
                                                        onChange={(e) => {

                                                            setarea(e.target.value)
                                                       
                                                        }}>
                                                        <option selected >Select Area</option>
                                                        <option value="Colombo">Colombo</option>
                                                        <option value="	Kandy">	Kandy</option>
                                                        <option value="	Kurunegala">Kurunegala</option>
                                                        <option value="	Matara">Matara</option>
                                                        <option value="	Matara">Matara</option>
                                                        <option value="Galle">Galle</option>
                                                    </select>
                                                    <br></br>
                                                   

                                                    <select className="form-select" aria-label="Default select example" style={{ width: "25rem" }} value={type}
                                                        onChange={(e) => {

                                                            settype(e.target.value)
                                                          

                                                        }}>
                                                        <option selected >Select Vehicale type </option>
                                                        <option value="Bike">Bike</option>
                                                        <option value="Car">Car</option>
                                                        <option value="Van">Van</option>
                                                    </select>
                                                    <br></br>
                                                    <label for="exampleInputEmail1"> Delivery Charge</label>


                                                    <input
                                                        label="name"
                                                        type="text"
                                                        style={{width:"20rem"}}
                                                        id="defaultFormremRegisterPasswordEx4"
                                                        className="form-control"
                                                        value={charges}
                                                        placeholder="Enter Deliver Charge "
                                                        required
                                                        onChange={(e) => {
                                                            setcharges(e.target.value)

                                                        }}
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







                                                </div>



                                                <div className="text-center mt-4">
                                                    <button type="submit" className="btn btn-success purple-gradient  rounded-pill">Submit</button>
                                                </div>
                                            </form>
                                            <MDBModalFooter>

                                            </MDBModalFooter>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>

                        <br></br>
                        <br></br>
                        <br></br>
                    </div>


                             

            </div>

                                                        <br></br>

        </div>
    )
}
