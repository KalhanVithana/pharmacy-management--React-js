import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
export default function Tablerow(props) {

  const deleteData = async()=>{

    await axios.delete(`http://localhost:4000/user/delete/${props.obj._id}`).then(res=>{
  
         
     
      console.log(res.data);

    
  
      })

      toast.error(' Deleted Sucessfully');
      //window.location="/"
  }
   
    return (
        
     
      <tr>
    
            
      <td>{props.obj.productNO}</td>
        <td>{props.obj.productname}</td>
        <td>{props.obj.description}</td>
        <td>{props.obj.price}</td>
        <td>{props.obj.category}</td>
        <td> <button type="button" class="btn btn-warning btn-sm px-3">
        <Link className="edit-link" to={"/edit/"+props.obj._id}><i class="fas fa-arrow-alt-circle-down"></i> </Link>
          </button></td>
        <td> <button type="button"  value ={props.obj.id} onClick={deleteData} class="btn btn-danger btn-sm px-3">
      <i class="fas fa-times"></i>
          </button></td>
                </tr>
  
  
    )
}
