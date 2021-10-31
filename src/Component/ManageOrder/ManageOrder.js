import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from './../Home/Context/UseAuth';
import { Container,Row,Col } from 'react-bootstrap';
import SingleOrder from './SingleOrder';

const ManageOrder = () => {
    const [order,setOrder]=useState([]);
    const {user}=useAuth();
    useEffect(()=>{
        fetch(`http://localhost:4000/tourinfo/${user.email}`)
        .then(res=>res.json())
        .then(data=>{setOrder(data)
            console.log(data)})
    },[])
    return ( 
        <div>
                
                <h3> You have booked  {order.length} packages </h3>


<div className="container">
    <div className="row">
        {
    order.map(data=><SingleOrder Key={data._id} data={data}></SingleOrder>)
}
    </div>


</div>
             {/* <Container>
  
          <Row>
          {
              order.map(data=><Col> {data._id}</Col>)
          }
          
           </Row>


          </Container> */}

        </div>
    );
};

export default ManageOrder;