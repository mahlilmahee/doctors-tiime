import React from 'react';
import { Col } from 'react-bootstrap';
import './tour.css'
import { Button } from 'react-bootstrap';
const Tour = (props) => {
    const {tour,description,image,price}=props.data;
    return (
        <div className="tour">
           {/* <Col lg="8">  */}
           <img src={image} />
            <h5>{tour}</h5>
            <h6> {description.slice(0,200)}</h6>
            <Button variant="info"> Book Now </Button>
           {/* </Col> */}
        </div>
    );
};

export default Tour;