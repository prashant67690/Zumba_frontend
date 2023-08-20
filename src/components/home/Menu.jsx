import React from 'react'
import MenuCard from './MenuCard'
import burger1 from"../../assests/category/burger.jpg";
import biryani from "../../assests/category/biryani.jpg";
import dhosa from "../../assests/category/dhosa.jpg";
import pizza from "../../assests/category/pizza.jpg";
function Menu() {

  const addToCartHandler = (itemNum)=>{};

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