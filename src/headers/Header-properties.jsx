import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import img from '../island.jpg'
import '../App.css'
import { Link } from 'react-router-dom';
import FeedBack from '../Feedback/Feedback';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Cards() {
    const[productNO,setproductNO]= useState('');
    const[productname,setproductname]= useState('');
    const[price,setprice]= useState('');
    const[category,setcategory]= useState('');
    const[quty,setquty]= useState('');
    const[description,setdescription]= useState('');
    const[search,setsearch] = useState('')
    const[filename,setfilename] =useState("")
    const[getproduct,setgetproduct]= useState([]);    

    useEffect(async() => {
    
        await axios.get('http://localhost:4000/user/all',getproduct).then(res=>{
    
           
            setgetproduct(res.data)
            console.log(res.data)
    
            })
    
    
    }, [])


    
    const image = `../${getproduct.filename}`

    

    const getproducts = ()=>{

        return getproduct.map((res,i)=>{

            return  <div>

          
            <Card className= "card-jsx" style={{ width: '25rem',height:"30rem" }}>
            <Card.Img   className ="boarder" variant="top" src ={res.filename}  />
            <br></br>
           <Card.Title>{res.productname}</Card.Title>
           <h2  className="my-3" style ={{color:"red"}}>RS.{res.price}</h2>
           <h4 className="my-1">{res.description}</h4>

           
            <Card.Body>
              
                
                
                
              <Card.Text>
               
              </Card.Text>
              <div  className="crd-butn">
              <Button  className= "card-class rounded-pill" variant="danger" style={{width:"9rem"}}><Link className="edit-link" to={"/all/"+res._id}><i class="fas fa-cart-plus" style={{color:"white"}}> order now </i></Link></Button>
              <Button  className= "card-class rounded-pill"   variant="primary" style={{width:"9rem",height:"3.6rem"}}> <i class="fas fa-hand-holding-usd" style={{color:"white"}}> buy</i> 
            </Button>
              </div>
             
            </Card.Body>
            <center>
           
            </center>
           
          </Card>
            
            
        
         
  </div>


  
  

        })
    }


    return (
        <div >
     

{getproducts()}





        </div>
        
    )
}
