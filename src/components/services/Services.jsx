import { useRef } from "react";
import "./services.scss"
import { motion, useInView } from "framer-motion";


const variants ={
    initial : {
        x: -250,
        opacity: 0,
        y:50,
    },
    animate:{
        x: 0,
        y:0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Services = ()=>{

    const ref = useRef();

    const isInView = useInView(ref, {margin: "-100px"})

    return (
        <motion.div className="services" ref={ref} variants={variants} animate={isInView && "animate"} initial="initial">
            <motion.div className="textContainer" variants={variants} >
                <p>I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants} >
                <div className="title">
                    <img src="./people.webp" alt="" />
                    <h1><motion.b whileHover={{ color:"orange" }}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b  whileHover={{ color:"orange" }}>For Your</motion.b> Business.</h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants} >
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusantium corporis sapiente at nemo temporibus necessitatibus
                        vero est praesentium ratione facere!</p>
                    <button>GO</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusantium corporis sapiente at nemo temporibus necessitatibus
                        vero est praesentium ratione facere!</p>
                    <button>GO</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusantium corporis sapiente at nemo temporibus necessitatibus
                        vero est praesentium ratione facere!</p>
                    <button>GO</button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusantium corporis sapiente at nemo temporibus necessitatibus
                        vero est praesentium ratione facere!</p>
                    <button>GO</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services

