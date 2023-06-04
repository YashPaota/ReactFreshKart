import React, { useContext, useState , useEffect } from 'react';
import Banner from './Banner';
import Cards from './Cards';
import Popular from './Popular';
import AppContext from '../services/AppContext';

const Home = () => {

    const[state , setState] = useContext(AppContext);
    const[fruits , setFruits] = useState([]);
    const[vegetables , setVegetables] = useState([]);

    const fetchProducts = () => {

    let products = [
        {
          id: 1,
          name: "Orange",
          price: 87,
          was: 115,
          weight: "1 kg",
          pic: "https://cdn.shopify.com/s/files/1/0581/2151/9284/products/IndianOrange_4_750x810.jpg?v=1631522534",
          popular: 1,
          type: "fruits",
        },
        {
          id: 2,
          name: "Apple",
          price: 143,
          was: 150,
          weight: "1 kg",
          pic: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1600",
          popular: 1,
          type: "fruits",
        },
        {
          id: 3,
          name: "Grapes",
          price: 90,
          was: 90,
          weight: "1 kg",
          pic: "https://media.istockphoto.com/id/682505832/photo/ripe-red-grape-pink-bunch-with-leaves-isolated-on-white-with-clipping-path-full-depth-of-field.jpg?b=1&s=612x612&w=0&k=20&c=FV-KZqPFwi09flA5ZokOT4Pg2-1rbge1epBRpvqTLJY=",
          popular: 0,
          type: "fruits",
        },
        {
          id: 4,
          name: "Pomegranate",
          price: 127,
          was: 135,
          weight: "1 kg",
          pic: "https://media.istockphoto.com/id/1397537185/photo/pomegranate-fruit-on-white.jpg?b=1&s=612x612&w=0&k=20&c=yavxGZB-me5y_84SUzGWSeiL0jgl9wKe2nMbdeXWZLA=",
          popular: 1,
          type: "fruits",
        },
        {
          id: 5,
          name: "Mango",
          price: 92,
          was: 92,
          weight: "1 kg",
          pic: "https://media.istockphoto.com/id/1318935291/photo/mango-fruit.jpg?b=1&s=612x612&w=0&k=20&c=K4EYuuP3ai32llB6v-PehPIvsFiYPTjNVyMTSlKfUOo=",
          popular: 1,
          type: "fruits",
        },
        {
          id: 6,
          name: "Strawberry",
          price: 225,
          was: 225,
          weight: "1 kg",
          pic: "https://cdn.shopify.com/s/files/1/0258/4307/3103/products/asset_40_1024x.jpg?v=1571838231",
          popular: 0,
          type: "fruits",
        },
        {
          id: 7,
          name: "Banana",
          price: 25,
          was: 32,
          weight: "0.5 kg",
          pic: "https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?b=1&s=612x612&w=0&k=20&c=LE7IRYWDGyPHLw2p-OrVpM07h7KVaIeb1Jn104y_pkU=",
          popular: 1,
          type: "fruits",
        },
        {
          id: 8,
          name: "Pineapple",
          price: 47,
          was: 47,
          weight: "1 pc",
          pic: "https://media.istockphoto.com/id/172862474/photo/pineapple-a-ripe-fresh-fruit-food-whole-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=r9xODovJC1xZDDInu2tqaZRTt17FhahVbhN3Dmnsx40=",
          popular: 0,
          type: "fruits",
        },
        {
          id: 9,
          name: "Kiwi",
          price: 163,
          was: 163,
          weight: "1 kg",
          pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/800px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg",
          popular: 0,
          type: "fruits",
        },
        {
          id: 10,
          name: "Cherry",
          price: 200,
          was: 200,
          weight: "250 gm",
          pic: "https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?auto=compress&cs=tinysrgb&w=1600",
          popular: 0,
          type: "fruits",
        },
        {
          id: 11,
          name: "Watermelon",
          price: 112,
          was: 112,
          weight: "1 pc",
          pic: "https://media.istockphoto.com/id/861283144/photo/fresh-watermelon.jpg?b=1&s=612x612&w=0&k=20&c=ExPIwqaTxtU_OKq-BrLsktrCZ0rVL6Omea7FmF0kPAc=",
          popular: 0,
          type: "fruits",
        },
        {
          id: 12,
          name: "Papaya",
          price: 46,
          was: 46,
          weight: "1 pc",
          pic: "https://exoticfruitbox.com/wp-content/uploads/2015/10/papaya-3-Exotic.jpg",
          popular: 0,
          type: "fruits",
        },
        {
          id: 13,
          name: "Blueberry",
          price: 220,
          was: 250,
          weight: "0.5 kg",
          pic: "https://media.istockphoto.com/id/496264172/photo/blueberries.jpg?b=1&s=612x612&w=0&k=20&c=-M_WR1PqxSLSlIekhBqAuQYLtxU2wX4N7cae1dDVidY=",
          popular: 0,
          type: "fruits",
        },
        {
          id: 14,
          name: "Tomato",
          price: 40,
          was: 40,
          weight: "1 kg",
          pic: "https://media.istockphoto.com/id/1398317661/photo/ripe-cherry-tomatoes-isolated-on-white-background-macro-shot-popular-worldwide-product-as.jpg?b=1&s=612x612&w=0&k=20&c=eMFBw6JmcLx9e8b2mbpWdj50dfF79dx2NLMYzzcocpA=",
          popular: 1,
          type: "vegetables",
        },
        {
          id: 15,
          name: "Mushroom",
          price: 52,
          was: 55,
          weight: "250 gm",
          pic: "https://media.istockphoto.com/id/1431311103/photo/flying-in-air-champignon-mushrooms-and-champignon-mushroom-slices-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=psswr7cxsXLE0S_VUD0b0ZHfCVKv2u4Q0FO1NZwuNUs=",
          popular: 1,
          type: "vegetables",
        },
        {
          id: 16,
          name: "Carrot",
          price: 29,
          was: 29,
          weight: "0.5 kg",
          pic: "http://cdn.shopify.com/s/files/1/0451/1101/7626/products/carrotseeds.jpg?v=1604032858",
          popular: 0,
          type: "vegetables",
        },
        {
          id: 17,
          name: "Potato",
          price: 32,
          was: 32,
          weight: "1 kg",
          pic: "https://media.istockphoto.com/id/182146174/photo/potatoes-covered-in-soil-against-white.jpg?b=1&s=612x612&w=0&k=20&c=sEO7uEc-DO-YIIGkNYPXUbVLnzbWH_tCuRAA1Bs0xPw=",
          popular: 1,
          type: "vegetables",
        },
        {
          id: 18,
          name: "Onion",
          price: 34,
          was: 35,
          weight: "1 kg",
          pic: "https://www.bigbasket.com/media/uploads/p/xxl/10000148-2_2-fresho-onion.jpg",
          popular: 1,
          type: "vegetables",
        },
        {
          id: 19,
          name: "Beans",
          price: 12,
          was: 12,
          weight: "250 gm",
          pic: "https://media.istockphoto.com/id/182035936/photo/fresh-beans.jpg?b=1&s=612x612&w=0&k=20&c=Fs1xP8nVMBP21-UkTIwt03tgW5dmSWXUMmPYLxhxVRw=",
          popular: 0,
          type: "vegetables",
        },
        {
          id: 20,
          name: "Beetroot",
          price: 26,
          was: 26,
          weight: "0.5 kg",
          pic: "https://cdn.shopify.com/s/files/1/0274/3481/articles/LYOFOOD-freeze-dried-organic-beetroot-powders-EU-01.jpg?v=1490710701",
          popular: 0,
          type: "vegetables",
        },
        {
          id: 21,
          name: "Capsicum",
          price: 14,
          was: 14,
          weight: "1 pc",
          pic: "https://cdn.shopify.com/s/files/1/1380/2059/products/Capsicum-Red_large.jpg?v=1598079508",
          popular: 0,
          type: "vegetables",
        },
        {
          id: 22,
          name: "Ginger",
          price: 12,
          was: 12,
          weight: "100 gm",
          pic: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61SCxbFGpWL._SX679_.jpg",
          popular: 1,
          type: "vegetables",
        },
        {
          id: 23,
          name: "Spinach",
          price: 16,
          was: 16,
          weight: "200 gm",
          pic: "https://www.jiomart.com/images/product/600x600/590004479/spinach-paalak-1-bunch-approx-100-g-300-g-product-images-o590004479-p590004479-0-202203170434.jpg",
          popular: 0,
          type: "vegetables",
        },
        {
          id: 24,
          name: "Broccoli",
          price: 82,
          was: 90,
          weight: "1 pc",
          pic: "https://cdn.shopify.com/s/files/1/0275/8020/3094/products/Broccoli.jpg?v=1655750100",
          popular: 0,
          type: "vegetables",
        },
      ];
      for(let product of products)
      {
        product.quantity = 0;
      }
      categorizeProducts(products);
    setState({ ...state, products });
    };
      

      

       const categorizeProducts = (products) => {
        let tempFruits = [];
        let tempVegetables = [];
        for(let product of products)
        {
            if(product.type==="fruits" && product.popular === 1)
            {
                tempFruits.push(product);
            }
            if(product.type==="vegetables" && product.popular=== 1)
            {
                tempVegetables.push(product);
            }
        }
        setFruits(tempFruits);
        setVegetables(tempVegetables);
      }

      useEffect(() => {
        if (state.products.length === 0) {
          fetchProducts();
        } else {
          categorizeProducts(state.products);
        }
      }, [state.products]);

  return (
    <>
        <Banner />
        <Cards />
        <Popular title="Popular Fruits" items={fruits} />
        <Popular title="Popular vegetables" items={vegetables} />

    </>
  )
}

export default Home;