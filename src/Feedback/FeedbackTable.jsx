
import React from 'react'
import axios from 'axios'
import {Link} from  'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function FeedbackTable(props) {
    

    const deleteData = async()=>{

        await axios.delete(`http://localhost:4000/feedback/delete/${props.obj._id}`).then(res=>{
      
             
         
          console.log(res.data);

    
         
      
          })
          toast.error(' Deleted Sucessfully');
          window.location='/GetFeedback'
         
      }
    return (
        
            
            <tr>
               
  
      <td>{props.obj.fname}</td>
      <td>{props.obj.lname}</td>
      <td>{props.obj.email}</td>
      <td>{props.obj.address}</td>
      <td>{props.obj.mobile}</td>
     
      <td> <button type="button" class="btn btn-warning btn-sm px-3">
      <Link className="edit-link" to={"/edt/"+props.obj._id}><i class="fas fa-arrow-alt-circle-down"></i> </Link>
        </button></td>
      <td> <button type="button"  onClick={deleteData} class="btn btn-danger btn-sm px-3">
    <i class="fas fa-times"></i>
        </button></td>
      
              </tr>
        
    )
}
