
import React from 'react'
import axios from 'axios'
import {Link} from  'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function TableRow(props) {
    

    const deleteData = async()=>{

        await axios.delete(`http://localhost:4000/pharmacy/delete/${props.obj._id}`).then(res=>{
      
             
         
          console.log(res.data);

    
         
      
          })
          toast.error(' Deleted Sucessfully');
          //window.location='/GetFeedback'
         
      }
    return (
        
            
            <tr>
               
             
      <td>{props.obj.product}</td>
      <td>{props.obj.qunty}</td>
      <td>{props.obj.total}</td>
      <td>{props.obj.company}</td>
      <td>{props.obj.country}</td>
     
      <td> <button type="button" class="btn btn-warning btn-sm px-3">
      <Link className="edit-link" to={"/pharma/"+props.obj._id}><i class="fas fa-arrow-alt-circle-down"></i> </Link>
        </button></td>
      <td> <button type="button"  onClick={deleteData} class="btn btn-danger btn-sm px-3">
    <i class="fas fa-times"></i>
        </button></td>
      
              </tr>
        
    )
}
