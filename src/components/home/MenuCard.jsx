import React from 'react'
import {motion} from "framer-motion";
function MenuCard({itemNum,burgerSrc,price,title,handler}) {
  return (
    <motion.div className='menuCard'
    initial={{
      x:"-100%",
      opacity:0,
    }}
    whileInView={{
      x:"0",
      opacity:1,
    }}
    >
       <div>item {itemNum}</div>
       <main>
        <img src={burgerSrc} alt={itemNum} />
       </main>

       <h5>₹{price}</h5>
       <p>{title}</p>

       <button className='btn' onClick={()=>handler(itemNum)}>Buy Now</button>
    </motion.div>
  )
}

export default MenuCard