import React from 'react'
import {motion} from "framer-motion";

export default function FoodCard({title,itemNum,price,foodsrc}) {
  return (
    <motion.div className="content">
        <main>
            <img src={foodsrc} alt={itemNum} />
        </main>
        <h5>{price}</h5>
        <p>₹ {title}</p>
        <button>Buy Now</button>
    </motion.div>
  )
}
