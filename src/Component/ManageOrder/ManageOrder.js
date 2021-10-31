import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from './../Home/Context/UseAuth';

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
                <h2> This is manage order by brother </h2>
                <h3> WE have got {order.length}</h3>

        </div>
    );
};

export default ManageOrder;