import React, { Fragment } from 'react'
import mainImage from "../../assests/food-main.jpg";
import {motion} from "framer-motion";
import Menu from './Menu';



function Home() {

    const options ={
        initial:{
            x:"-100",
            opacity:0,},
        whileInView:{
            x:"-100",
            opacity:1
        }
    }
  return (
    <Fragment>

    <section className='home'>
       <div>
        <div className='home-content'>
           <motion.h1 {...options}>Zumba</motion.h1>
           <motion.p {...options} transition={{delay:0.2,}}>Discover the best food & drinks</motion.p>
           <motion.a
            initial={{
                y:"-100",
                opacity:0,
            }}
            whileInView={{
                y:"0",
                opacity:1,
            }}
            transition={{delay:0.4}}
            href='#menu'>Explore Food</motion.a>
        </div>
       <img className="main-image" src={mainImage} alt="Delicious food" />
       </div>
       </section>
     <Menu/>

   </Fragment>
  )
}

export default Home