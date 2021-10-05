import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


export default function TableOrder(props) {


    const deleteData = async()=>{

        await axios.delete(`http://localhost:4000/order/delete/${props.obj._id}`).then(res=>{
      
             
         
          console.log(res.data);
    
        
      
          })
          toast.error(' Deleted Sucessfully');
          window.location="/order"
      }
    return (
        
            
            <tr>
    
    <td>{props.obj.productNO}</td>
      <td>{props.obj.productname}</td>
      <td>{props.obj.price}</td>
      <td>{props.obj.total}</td>
      <td>{props.obj.name}</td>
      <td>{props.obj.email}</td>
      <td> <button type="button" class="btn btn-warning btn-sm px-3">
      <Link className="edit-link" to={"/details/"+props.obj._id}><i class="fas fa-arrow-alt-circle-down"></i> </Link>
        </button></td>
      <td> <button type="button"  onClick={deleteData} class="btn btn-danger btn-sm px-3">
    <i class="fas fa-times"></i>
        </button></td>
        <td> <button type="button" class="btn btn-warning btn-sm px-3">
      <Link className="edit-link" to={"/deliver/"+props.obj._id}><i class="fas fa-arrow-alt-circle-down">Deliver</i> </Link>
        </button></td>
              </tr>
        
    )
}
