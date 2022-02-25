import React from 'react';
import Carousel from '../../Components/Carousel/Carousel.js'
import Order from "../../assets/order.jpg"
import ProductCard from '../../Components/ProductCard/ProductCard.js';
import ProductList from '../ProductList/ProductList'
import './Home.css' 
const Home = () => {
  return <div>
  <div classNaame="home">
   
      <Carousel />
    <h2 ClassName="welcome">Welcome TO Ashop Store</h2>
    <ProductList />
     <div ClassName="delivery">
      
    <img 
          alt="Order"
          src={Order}
         width={600}
        />
    <h2>Home Delivery</h2>
    </div>
  </div>
  </div>
};

export default Home;
