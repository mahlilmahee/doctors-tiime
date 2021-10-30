import React from 'react';
import Banner from '../Banner/Banner';
import { useState } from 'react';
import { useEffect } from 'react';
import Tour from '../Tour/Tour';
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
        <div>
        {
           tours.map(data=> <h3>This is me </h3> )
           }
        </div>
        </div>
    );
};

export default Home;