import React from 'react';
import { useParams } from 'react-router-dom';

const Order = () => {
    const {orderId}=useParams()
        return (
        <div>
                <h3>THis is me here my babe {orderId} </h3>
        </div>
    );
};

export default Order;