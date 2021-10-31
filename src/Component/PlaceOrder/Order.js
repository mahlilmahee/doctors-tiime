import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from './../Home/Context/UseAuth';
import './Order.css'
const Order = () => {
    const {orderId}=useParams();
    const {user}=useAuth(); 
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset();
    };
        return (
       <div>
            <div className="d-flex  align-center">
               <form  className="d-flex flex-column justify-content-center mx-auto my-5" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="your  name" defaultValue={user.displayName} {...register("name")} />
      <input placeholder="email" defaultValue={user.email} {...register("email")} />
      <input placeholder="date" {...register("date")} />
      <input placeholder="address"  {...register("address")} />
      <input type="submit" value="submit" />
    </form>
        </div>
        <div>
            <h3> Your order details are here </h3>
        </div>
       </div>

    );
};

export default Order;