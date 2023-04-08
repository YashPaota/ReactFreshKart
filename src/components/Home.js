import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Popular from "./Popular";
import axios from "axios";
import { useEffect } from "react";


const Home = () => {
    const fetchProducts = () => {
        axios.get("http://localhost:5000/freshkart").then((res) => 
        {
        console.log(res)
    });

    }
    useEffect(() => {
       fetchProducts();
    },[]);

  return (
    <>
    <Banner />
    <Cards />
    <Popular title="Popular Fruits" />
    <Popular title = "Popular Vegetables"/>
     </>
 );
};

export default Home;