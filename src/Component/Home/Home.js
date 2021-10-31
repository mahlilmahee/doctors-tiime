import React from 'react';
import Banner from '../Banner/Banner';
import { useState } from 'react';
import { useEffect } from 'react';
import Tour from '../Tour/Tour';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
const Home = () => {
   const [tours,setTours]=useState([]);
   useEffect(()=>{
       fetch('http://localhost:4000/tour')
       .then(res=>res.json())
       .then(tour=>{ setTours(tour)
         console.log(tour)})
   },[])
  
    return (
        <div>
            <Banner></Banner>
            <Container>
                 <Row>
                       {
         
             tours.map(data=> <Col> <Tour key={data._id} data={data}></Tour> </Col> )
          
                       }
                </Row>
                </Container>
        
        </div>
    );
};

export default Home;