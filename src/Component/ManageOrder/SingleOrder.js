import React from 'react';
import { Button } from 'react-bootstrap';
import './SingleOrder.css'
const SingleOrder = (props) => {
   const {_id,name,email,status,tourName}=props.data;

    return (
        <div className=" col-12 col-lg-6">
        <div className="single  ">
        <h5> Name:{name}</h5>
          <h5>Order:{tourName}</h5>
          <h5>Status:{status}</h5>
          <h5>Email:{email}</h5>
          <Button>Cancel your order </Button>
        </div>
        </div>
    );
};

export default SingleOrder;