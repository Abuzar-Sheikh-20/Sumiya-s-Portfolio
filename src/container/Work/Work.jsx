// import React, {useState, useEffect} from 'react'
import './Work.css';
import {motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";

import naturePainting from './Nature Painting.jpg';
import quranVerse from './Qura\'an Verse.jpg';
import customizedName from './Customize Name.jpg';
import peaceJar from './Peace Jar.jpg';

const works = [
  {title: 'Peace Jar', description: "To purify our soul by reciting some Qura'an Ayah and Ahadees.", imgUrl: peaceJar},
  {title: 'Customize Name', description: "I used to do calligraphy according to your references if there's is.", imgUrl: customizedName},
  {title: "Qura'an Verse", description: "It will always be catchy, don't worry 😉", imgUrl: quranVerse},
  {title: 'Nature Painting', description: "I will always exceed your imagination limits, InshaAllah!", imgUrl: naturePainting}
]

const Work = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 200 }}
      animate={{ y: inView ? 0 : 100 }}
      transition={{ duration: 1 }}
    >
    <div id='work' className='work'>
      <h2>My Creative <span>Works</span></h2>

      <div className="workSection">
        {works.map((work, index) => (
          <motion.div
          whileInView={{ opacity: 1 }} 
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.5, type: "tween" }}
          className='workCategory'
          key={work.title + index}
          >
            <img className='workCategoryImage' src={work.imgUrl} alt={work.title} />
            <h1 className='bold-text' style={{marginTop: 20}}>{work.title}</h1>
            <p className='p-text' style={{marginTop: 10}}>{work.description}</p>
          </motion.div>

        ))}
      </div>

    </div>
    </motion.div>
  )
}

export default Work
