
import React from 'react'
import axios from 'axios'
import {Link} from  'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function DeliveryTableRow(props) {
    

    const deleteData = async()=>{

        await axios.delete(`http://localhost:4000/Delivery/delete/${props.obj._id}`).then(res=>{
      
             
         
          console.log(res.data);

    
         
      
          })
          toast.error(' Deleted Sucessfully');
          window.location='/deliver'
         
      }
    return (
        
            
            <tr>
               
  
      <td>{props.obj.productname}</td>
      <td>{props.obj.delivername}</td>

      <td>{props.obj.name}</td>
      <td>{props.obj.mobile}</td>
      <td>{props.obj.area}</td>
      <td> <button type="button" class="btn btn-warning btn-sm px-3">
      <Link className="edit-link" to={"/get/"+props.obj._id}><i class="fas fa-arrow-alt-circle-down"></i> </Link>
        </button></td>
      <td> <button type="button"  onClick={deleteData} class="btn btn-danger btn-sm px-3">
    <i class="fas fa-times"></i>
        </button></td>
      
              </tr>
        
    )
}
