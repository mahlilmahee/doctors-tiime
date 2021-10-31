import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './SingleOrder.css'
const SingleOrder = (props) => {
   const {_id,name,email,status,tourName}=props.data;
   const location=useLocation();
  const handlingdeleted=()=>{
    const decision=window.confirm('Are you sure to cancel your order ')
    if(decision){
        fetch(`http://localhost:4000/tourpak/${_id}`,{
          method:"DELETE"
          })
      .then(res=>res.json())
      .then(data=>{
          if(data.deletedCount>0){
            location.reload();
          }
      })
    }
      
  }
    return (
        <div className=" col-12 col-lg-6">
        <div className="single  ">
        <h5> Name:{name}</h5>
          <h5>Order:{tourName}</h5>
          <h5>Status:{status}</h5>
          <h5>Email:{email}</h5>
          <Button onClick={handlingdeleted}>Cancel your order </Button>
        </div>
        </div>
    );
};

export default SingleOrder;