import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 200 }}
      animate={{ y: inView ? 0 : 100 }}
      transition={{ duration: 1 }}
    >
      <section id="about" class="aboutSec d-flex">
        <h1 className="heading">
          Beyond the Canvas <span>Into the Soul</span>
        </h1>
        <div class="contentSec">
          <div class="imgSec">
            <img src={require("./image.jpeg")} alt="" />
          </div>

          <div class="texttSec">
            <div class="aboutTitle">
              <div className="experience">
                <i class="material-icons">work</i>
                <b>Experience</b>
                <span className="experiences">
                  4+ Years - Artist <br />
                  7+ Years - Instructor
                </span>
              </div>
              <div className="education">
                <i class="material-icons">school</i>
                <b>Education</b>
                <span className="educations">
                  BSCS <br />
                  2022 - 2026
                </span>
              </div>
            </div>
            <p>
              I am Sumaiya, an artist with a love for calligraphy, blending
              tradition and creativity in every piece. I am also an Islamic
              mentor, teaching both offline and online classes. My aim is to
              inspire others through art and share the beauty of Islamic
              teachings in a simple and meaningful way.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
