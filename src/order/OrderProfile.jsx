
import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
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
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import NavbarPage from '../Pages/NavbarPage';


export default function OrderProfile(props) {

    const [productNO, setproductNO] = useState('');
    const [productname, setproductname] = useState('');
    const [price, setprice] = useState('');
    const [name, setname] = useState('');
    const [quty, setquty] = useState('');
    const [email, setemail] = useState('')
    const [nic, setnic] = useState('')
    const [mobile, setmobile] = useState('')
    const [address, setaddress] = useState("")
    const [setdata, setproduct] = useState([]);
    const [filename, setfilename] = useState("")

    const total = quty * price;
    useEffect(async() => {
      

        await axios.get(`http://localhost:4000/order/details/${props.match.params.id}`).then(res=>{

            setproductNO(res.data.productNO)
            setproductname(res.data.productname)
            setprice(res.data.price)
            setemail(res.data.email)
            setnic(res.data.nic)
            setmobile(res.data.mobile)
            setquty(res.data.quty)
            setproduct(res.data)
            setaddress(res.data.address);
            setname(res.data.name)
            
            console.log(res.data)
     console.log(res.data);
   


    })

    
   }, [])


   const submit = async () => {



    console.log("call")



    try {





        const formdata = {productNO,productname,price, quty,name,email,nic, mobile, address,total}



        await axios.put(`http://localhost:4000/order/update/${props.match.params.id}`, formdata).then(res => {

            console.log(res.data)

        })

        alert("sucess")
    }
    catch (err) {

        console.log(err)
    }


}

const image = `../${setdata.image}`



    return (
        <div  className="purple-gradient">
           <NavbarPage/>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <MDBContainer>
                            <MDBRow>
                                <MDBCol md="6">
                                    <MDBCard style={{ width: "60rem" ,left:"5rem" }}>
                                        <MDBCardBody className="cards">
                                            <center>
                                                <MDBCardHeader className="form-header purple-gradient rounded" style={{ width: "45rem", top: 20 }}>
                                                    <h3 className="my-3">
                                                    <MDBIcon icon="arrow-alt-circle-up" />       Edit Order 
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
                                                        label="price"
                                                        icon="dollar-sign"
                                                        group
                                                        type="number"
                                                        validate
                                                        value={price}
                                                        onChange={e=>{
                                                            setprice(e.target.value)
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

                                                    <MDBInput style={{ width: "20rem" }}
                                                        label="total"
                                                        icon="ffas fa-plus"
                                                        disabled
                                                        group
                                                        type="number"
                                                        validate
                                                        value={total}
                                                     
                                                    />


                                                       <label for="exampleInputEmail1">Name</label>
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
                                                    <label for="exampleInputEmail1">email</label>
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




                                                    <br></br>


                                                    <MDBRow>
                                                        <MDBCol md="4" className="mb-3">
                                                        <label for="exampleInputEmail1">NIC</label>
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
                                                            {/* <div className="invalid-feedback">
                Please provide a valid city.
              </div> */}
                                                            {/* <div className="valid-feedback">Looks good!</div> */}
                                                        </MDBCol>
                                                        <MDBCol md="4" className="mb-3">
                                                        <label for="exampleInputEmail1">Mobile</label>
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
                                                        <label for="exampleInputEmail1">Address</label>
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
                                                    <button type="submit" className="btn btn-success purple-gradient rounded-pill">Update</button>
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
           <br></br>
            <br></br>
           <br></br>

        </div>
    )
}
