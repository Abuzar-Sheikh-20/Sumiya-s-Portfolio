import React, {useState} from 'react'
import {motion} from 'framer-motion';
import './Testimonial.css';
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: <a href="https://www.linkedin.com/in/tahira-nazir-a4b5c6/" target="_blank" rel="noopener noreferrer">Tahira Nazir</a>,
    feedback: "The Peace Jar is such a unique and thoughtful creation! It's a beautiful way to keep spirituality alive in daily life with the Quranic verses and Ahadees.",
    company: "UI/UX Designer & Web Developer",
  },
  {
    name: <a href="https://www.linkedin.com/in/akbar-ali-88917a22b/" target="_blank" rel="noopener noreferrer">Akbar Ali</a>,
    feedback: "The personalized calligraphy art here is simply mesmerizing. Sumaiya’s attention to detail while customizing names and quotes is truly remarkable.",
    company: "Art Enthusiasts",
  },
  {
    name: <a href="https://www.linkedin.com/in/hamza-masroor-a513972a3/" target="_blank" rel="noopener noreferrer">Hamza Masroor</a>,
    feedback: "I absolutely love the way Qur'anic verses are artistically presented! The elegance and creativity in her work capture the essence of spirituality perfectly.",
    company: "Islamic Art Collector",
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, feedback, company } = testimonials[currentIndex];

  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 200 }}
      animate={{ y: inView ? 0 : 100 }}
      transition={{ duration: 1 }}
    >

    <section id='testimonial' className="testimonial">
    <h2>Testimonials</h2>
    <motion.div
    whileHover={{ scale: 1.05 }} 
    transition={{ duration: 0.5, type: "tween" }}
    className="testimonial-container">
      <div className="testimonial-card">
        <p className="testimonial-feedback">{feedback}</p>
        <h3 className="testimonial-name">{name}</h3>
        <p className="testimonial-company">{company}</p>
      </div>
      
      <div className="testimonial-buttons">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </motion.div>
    </section>
    </motion.div>
  );
};

export default Testimonial;