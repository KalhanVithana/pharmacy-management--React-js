
import React from 'react'
import axios from 'axios'
import {Link} from  'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


export default function SupplierTable(props) {
    
  const toastmessage = false;

    const deleteData = async()=>{


        await axios.delete(`http://localhost:4000/supplier/delete/${props.obj._id}`).then(res=>{
      
             
         
          console.log(res.data);

    
        
      
          })
          
        
            
            toast.error('deleted Sucessfully')

              setTimeout(() => {
                window.location="/Supllier"
              }, 5000);
            
          
         
       
       

        
         
         
      }
    return (
        
            
            <tr>
              
          
     
  
      <td>{props.obj.name}<ToastContainer/></td>
      <td>{props.obj.email}</td>

      <td>{props.obj.address}</td>
      <td>{props.obj.mobile}</td>
      <td>{props.obj.Supply}</td>
      <td> <button type="button" class="btn btn-warning btn-sm px-3">
      <Link className="edit-link" to={"/getSupllier/"+props.obj._id}><i class="fas fa-arrow-alt-circle-down"></i> </Link>
        </button></td>
      <td> <button type="button"  onClick={deleteData} class="btn btn-danger btn-sm px-3">
    <i class="fas fa-times"></i>
        </button></td>
      
              </tr>
        
    )
}
