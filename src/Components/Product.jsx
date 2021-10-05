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
import jsPDF from 'jspdf'; 
import 'jspdf-autotable';


export default function Product(props) {


  const [productNO, setproductNO] = useState('');
  const [productname, setproductname] = useState('');
  const [price, setprice] = useState('');
  const [category, setcategory] = useState('');
  const [quty, setquty] = useState('');
  const [description, setdescription] = useState('');
  const [search, setsearch] = useState('')
  const [filename, setfilename] = useState("")
  const [getdata, setdata] = useState([]);



  const Validate = () => {
    let error = false;
    if (!productNO || !productname || !price || !quty || !category || !description || !filename) {
      error = true;

      toast.warn('all details  must require')


    }

    if (productNO) {


      if (productNO < 3) {
        error = true;

        toast.warn('product NO at least  3 Characters')

      }
    }


    if (productname) {


      if (productname.length < 5) {
        error = true;

        toast.warn('product Name at least 5 Characters')

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

    if (category) {


      if (category == null) {
        error = true;

        toast.warn('please enter the category ')

      }
    }

    if (description) {


      if (description.length < 2) {
        error = true;

        toast.warn('please Enter the valid Description')

      }
    }






    return error;


  }



  const submit = async (e) => {

  

    e.preventDefault();

    if (!Validate()) {


      try {

        const formdata = new FormData();


        formdata.append("productNO", productNO);
        formdata.append("productname", productname);
        formdata.append("price", price);
        formdata.append("category", category);
        formdata.append("quty", quty);
        formdata.append("description", description);
        formdata.append("filename", filename);



        await axios.post('http://localhost:4000/user/add', formdata).then(res => {

          console.log(res.data)

        })
        

      }
      catch (err) {

        console.log(err)
      }
      toast.success('Product Added Sucessfully');
     
    }

  }

  useEffect(async () => {

    await axios.get('http://localhost:4000/user/all', getdata).then(res => {


      setdata(res.data)
      console.log(res.data)

    })


  }, [])

  const DataTable = () => {

    return SearchProducts.map((res, i) => {
      return <Tablerow key={i} obj={res} />
    })
  }

  const generatePDF = () => {

    const unit = "pt";

    const size = "A3"; 

    const orientation = "landscape"; 

    const marginLeft = 40;

    const doc = new jsPDF( orientation, unit, size );


    const title = "Product  Report ";

    const headers = [["product NO","productname","price","quty","category"]];
    

    const PDF = getdata.map(

      getdata=>[

       getdata.productNO,
       getdata.productname,
        getdata.price,
       getdata.quty,
       getdata.category,
       

       
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

    doc.save( "ProductReport.pdf" )

}


  const SearchProducts =
    getdata.filter(user => {

      if (!user.productname) {
        return console.log("not found")
      }
      return user.productname.toLowerCase().includes(search.toLowerCase());
    })

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
                        <MDBIcon fab icon="medrt" /> Add Products
                      </h3>

                    </MDBCardHeader>
                    <br></br>
                  </center>
                  <form onSubmit={submit} enctype="multipart/form-data">
                    <div className="grey-text">
                      <MDBInput
                        label=" product no"
                        icon="address-card"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value={productNO}
                        onChange={(e) => {
                          setproductNO(e.target.value)
                        }}
                      />

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

                      <MDBInput
                        label="price"
                        icon="dollar-sign"
                        group
                        type="number"
                        validate
                        value={price}
                        onChange={(e) => {

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


                      <br></br>


                      <select className="form-select" aria-label="Default select example" style={{ width: "25rem" }} value={category}
                        onChange={(e) => {

                          setcategory(e.target.value)
                          console.log(category)

                        }}>
                        <option selected >Select Category</option>
                        <option value="OTC/VMS">OTC/VMS</option>
                        <option value="Personal hygiene">Personal hygiene</option>
                        <option value="Food and beverages">Food and beverages</option>
                      </select>


                      <br></br>



                    </div>


                    <br></br>
                    <label for="exampleFormControlFile1">upload photo</label>
                    <input type="file" filename="filename" className="form-control-file" onChange={(e) => {
                      setfilename(e.target.files[0])


                    }}></input>

                    <br>
                    </br>
                    <label htmlFor="exampleFormControlTextarea1">
                      Description
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
        <br>
        </br>


        <MDBCard style={{ width: "70rem" }}>
          <input type="text" value={search} onChange={e => { setsearch(e.target.value) }} style={{ width: "30rem",height:"3rem" }} placeholder="search Product Name"></input>
          <button onClick={generatePDF} type="primary"  class="btn btn-info" style ={{width:"20rem"}}>Download  report</button> 
          <table class="table table-hover">
            <thead class="table-blue">
              <tr>

                <th scope="col">productNO:</th>
                <th scope="col">productname</th>
                <th scope="col">description:</th>
                <th scope="col">price</th>
                <th scope="col">category:</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>

              </tr>
            </thead>
            <tbody>


              {DataTable()}
            </tbody>
          </table>
          
        
        </MDBCard>

        <br></br>
        <br></br>
      </div>

    </div>
  )
}
