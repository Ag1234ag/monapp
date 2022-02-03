import React from 'react';
import Carousel from '../../Components/Carousel/Carousel.js'
import Order from "../../assets/order.jpg"
import './Home.css' 
import 'animate.css/animate.min.css'
const Home = () => {
  return <div>
   
      <Carousel />
    <h2 ClassName="animate__animated">Welcome TO Ashop Store</h2>
    <img
          alt="Order"
          src={Order}
          width="800"
        />
    <h2>Home Delivery</h2>
  </div>
};

export default Home;
