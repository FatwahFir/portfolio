import './hero.scss'
import { motion } from "framer-motion";

const Hero = ()=>{

    const textVariants= {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate:{
            x: 0,
            opacity:1,
            transition:{
                staggerChildren:0.1,
                duration:1,
            }
        },
        scrollButton:{
            opacity: 0,
            y: 10,
            transition:{
                duration:2,
                repeat: Infinity,
            }
        }
    }

    const sliderVariants= {
        initial: {
            x: 0,
        },
        animate:{
            x: "-220%",
            transition:{
                repeat: Infinity,
                repeatType: "mirror",
                duration:20,
            }
        },
    }

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>FATWAH FIRMANSYAH SR</motion.h2>
                    <motion.h1 variants={textVariants}>Mobile and Web Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants} whileHover={{ scale:1.1 }} whileTap={{ scale:0.95 }}>See the Latest Works</motion.button>
                        <motion.button variants={textVariants} whileHover={{ scale:1.1 }} whileTap={{ scale:0.95 }}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
                Frontend & Backend Developer
            </motion.div>
            <div className="imageContainer">
                <img src="/IMG_9757.png" alt="" />
            </div>
        </div>
    )
}

export default Hero