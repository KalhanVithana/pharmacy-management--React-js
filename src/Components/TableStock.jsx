import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export default function TableStock(props) {


    const deleteData = async()=>{

        await axios.delete(`http://localhost:4000/stock/delete/${props.obj._id}`).then(res=>{
      
             
         
          console.log(res.data);
    
        
      
          })
          toast.error(' Deleted Sucessfully');
          //window.location="/stock"
      }
    return (
        
            
            <tr>
              
            
 
      <td>{props.obj.productname}</td>
      <td>{props.obj.price}</td>
      <td>{props.obj.quty}</td>
      <td>{props.obj.message}</td>

      <td> <button type="button" class="btn btn-warning btn-sm px-3">
      <Link className="edit-link" to={"/edits/"+props.obj._id}><i class="fas fa-arrow-alt-circle-down"></i> </Link>
        </button></td>
      <td> <button type="button"   onClick={deleteData} class="btn btn-danger btn-sm px-3">
    <i class="fas fa-times"></i>
        </button></td>
              </tr>

     
    )
}
