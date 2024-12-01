import React from "react";
import { motion } from "framer-motion";
import "./Header.css";

const scaleProperties = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div id="home" className="header app__flex">
      <video className="header-video" autoPlay loop muted>
        <source src={require("./brushes.mp4")} type="video/mp4" />
      </video>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className="header-info"
      >
        <div className="header-badge">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <div className="badge app__flex">
              <span className="waveIcon">👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="intro">Hello, I am</p>
                <h1 className="myName">Abuzar</h1>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <div className="tag app__flex">
              <p className="p-intro">Artist</p>
              <p className="p-intro">Islamic Mentor</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="header-img"
      >
        <img className="girl" src={require("./girl.png")} alt="" />
        <div className="line"></div>
        <hr />

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overlay_circle"
        >
          <div className="circle"></div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={scaleProperties}
        whileInView={scaleProperties.whileInView}
        className="cicles"
      >
        
        <motion.div 
        whileHover={{scale: 1.1}} 
        transition={{duration: 0.5, type: 'tween'}}
        className="circleS1">
          <img className="symbols hand" src={require("./hand.png")} alt="H" />
        </motion.div>
        <motion.div 
        whileHover={{scale: 1.1}} 
        transition={{duration: 0.5, type: 'tween'}}
        className="circleS2">
          <img className="symbols" src={require("./qalam.png")} alt="Q" />
        </motion.div>
        <motion.div 
        whileHover={{scale: 1.1}} 
        transition={{duration: 0.5, type: 'tween'}}
        className="circleS3">
          <img className="symbols" src={require("./pallete.png")} alt="P" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
