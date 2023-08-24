import React from 'react'
import MenuCard from './MenuCard'
import burger1 from"../../assests/category/burger.jpg";
import biryani from "../../assests/category/biryani.jpg";
import dhosa from "../../assests/category/dhosa.jpg";
import pizza from "../../assests/category/pizza.jpg";
import {useDispatch} from "react-redux";
import toast from "react-hot-toast";


function Menu() {

  const dispatch = useDispatch();
  const addToCartHandler = (itemNum)=>{
    switch (itemNum) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "chickenBiryaniIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({ type: "masalaDosaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      case 4:
        dispatch({ type: "italianPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;  
    }
  };

  return (
    <section id='menu'>
        <h1>Choose Your Food</h1>
        <div>
          <MenuCard 
          itemNum={1}
          burgerSrc={burger1} 
          price={200} 
          title="Cheese Burger"
          handler={addToCartHandler}
          />
          <MenuCard 
          itemNum={2}
          burgerSrc={biryani} 
          price={120} 
          title="ChickenBiryani"
          handler={addToCartHandler}
          />
          <MenuCard 
          itemNum={3}
          burgerSrc={dhosa} 
          price={100} 
          title="Masala Dosa"
          handler={addToCartHandler}
          />
          <MenuCard 
          itemNum={4}
          burgerSrc={pizza} 
          price={250} 
          title="Italian Pizza"
          handler={addToCartHandler}
          />
        </div>
    </section>
  )
}
 
export default Menu