import React from 'react';
import bannerStyles from "../styles/banner.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import vegImg from "../images/Vegetables.png"
import fruitImg from "../images/Fruits.png";
import appleImg from "..//images/Apple.png";
import beansImg from "../images/Beans.png";
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false} showStatus={false}>
        <div>
            <img src={vegImg} alt="Vegetables"/>
            <div className={bannerStyles.heading} >Get Potatoes Free</div>
            <div className={bannerStyles.desc}>
               Buy vegetables and potatoes free. Condition Applied.
             </div>
             <div className={bannerStyles.cta}>
                <Link to="/items/vegetables">Shop Now</Link>
             </div>
        </div>
        <div>
            <img src={appleImg} alt="Vegetables"/>
            <div className={bannerStyles.heading} >An Apple a day Keeps Doctor Away</div>
            <div className={bannerStyles.desc}>
               Royal Gala Apples
             </div>
             <div className={bannerStyles.cta}>
             <Link to="/items/fruits">Shop Now</Link>
             </div>
        </div>
        <div>
            <img src={fruitImg} alt="Vegetables"/>
            <div className={bannerStyles.heading} >Bite into every Wellness</div>
            <div className={bannerStyles.desc}>
               Start your day with a fruit.
             </div>
             <div className={bannerStyles.cta}>
             <Link to="/items/fruits">Shop Now</Link>
             </div>
        </div>
        <div>
            <img src={beansImg} alt="Vegetables"/>
            <div className={bannerStyles.heading} >Rich In Protiens</div>
            <div className={bannerStyles.desc}>
               20% discount on french Beans.
             </div>
             <div className={bannerStyles.cta}>
             <Link to="/items/vegetables">Shop Now</Link>
             </div>
        </div>
        
    </Carousel>
  )
}

export default Banner;