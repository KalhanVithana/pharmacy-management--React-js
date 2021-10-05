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



export default function DeliveryProfile(props) {

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
    const[search,setsearch] = useState('')

    const [setdata, setproduct] = useState([]);


    useEffect(async () => {


        await axios.get(`http://localhost:4000/Delivery/get/${props.match.params.id}`).then(res => {


        
            setproductname(res.data.productname)
            setquty(res.data.quty)
            setaddress(res.data.address)
            settotal(res.data.total)
            setname(res.data.name)
            settype(res.data.type)
            setarea(res.data.area)
            setdelivername(res.data.delivername)
            setcharges(res.data.charges)
            setmobile(res.data.mobile)
            setproduct(res.data);

            console.log(res.data)



        })


    }, [])


    const submit = async (e) => {


        e.preventDefault();


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
                delivername
            }



            await axios.put(`http://localhost:4000/Delivery/update/${props.match.params.id}`, formdata).then(res => {

                console.log(res.data)

            })

            toast.success('data Updated Sucessfully');
        }
        catch (err) {

            console.log(err)
        }


    }




    const image = `../${setdata.image}`




    return (

        <div>
            <NavbarPage/>
             <ToastContainer />


            <div className="purple-gradient">





                <br></br>
                <br></br>
                <br></br>
               


          



                    <div lassName="card-jsx ">


                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="6">
                                    <MDBCard style={{ width: "60rem", left: "6rem" }}>
                                        <MDBCardBody className="cards">
                                            <center>
                                                <MDBCardHeader className="form-header ripe-malinka-gradient rounded" style={{ width: "45rem", top: 20 }}>
                                                    <h3 className="my-3">
                                                        <MDBIcon fab icon="fab fa-accusoft" /> Edit Delivery Charges
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

                                                  



                                                    <label for="exampleInputEmail1"> Customer Address</label>
                                                    <input
                                                        label="email"
                                                        type="text"
                                                        id="defaultFormRegisterPasswordEx4"
                                                        className="form-control"
                                                        value={address}
                                                        onChange={(e) => {
                                                            setaddress(e.target.value)

                                                        }}

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
                                                                id="defaultFormRegisterPasswordEx4"
                                                                className="form-control"
                                                                value={name}
                                                                placeholder="NIC "
                                                                required
                                                                onChange={(e) => {
                                                                    setname(e.target.value)
        
                                                                }}
                                                            />
            
                                                        </MDBCol>
                                                        <MDBCol md="4" className="mb-3">
                                                            <label for="exampleInputEmail1"> Customer Mobile</label>
                                                            <input

                                                                type="text"
                                                                id="defaultFormRegisterPasswordEx4"
                                                                value={mobile}
                                                                className="form-control"
                                                                name="NIC"
                                                                placeholder="mobile"
                                                                required
                                                                onChange={(e) => {
                                                                    setmobile(e.target.value)
        
                                                                }}
                                                            />

                                                        </MDBCol>
                                                        <MDBCol md="4" className="mb-3">
                                                            <label for="exampleInputEmail1"> Total Price</label>
                                                            <input
                                                                label="name"
                                                                type="text"
                                                                id="defaultFormRegisterPasswordEx4"
                                                                value={total}
                                                                className="form-control"
                                                                name="address"
                                                                placeholder=""
                                                                required
                                                                onChange={(e) => {
                                                                    settotal(e.target.value)
        
                                                                }}
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
                                                     <label for="exampleInputEmail1"> Area </label>
                                                    <select className="form-select" aria-label="Default select example" style={{ width: "25rem" }} value={area}
                                                        onChange={(e) => {

                                                            setarea(e.target.value)
                                                       
                                                        }}>
                                                        <option selected >{area}</option>
                                                        <option value="Colombo">Colombo</option>
                                                        <option value="	Kandy">	Kandy</option>
                                                        <option value="	Kurunegala">Kurunegala</option>
                                                        <option value="	Matara">Matara</option>
                                                        <option value="	Matara">Matara</option>
                                                        <option value="Galle">Galle</option>
                                                    </select>
                                                    <br></br>
                                                   
                                                    <label for="exampleInputEmail1"> Type</label>
                                                    <select className="form-select" aria-label="Default select example" style={{ width: "25rem" }} value={type}
                                                        onChange={(e) => {

                                                            settype(e.target.value)
                                                          

                                                        }}>
                                                        <option selected >{type}</option>
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








                                                </div>



                                                <div className="text-center mt-4">
                                                    <button type="submit" className="btn btn-success   ripe-malinka-gradient rounded-pill">Update</button>
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

                    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>





               
            </div>

                                                     


        </div>
    )
}
