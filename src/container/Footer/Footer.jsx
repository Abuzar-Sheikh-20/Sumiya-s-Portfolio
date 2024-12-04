import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';
import {motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_ft5b5ip', 'template_yp86zti', e.target, 'rieoLSS10BzaYnh6N')
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });
    
    setFormData({
      from_name: '',
      reply_to: '',
      message: '',
      password: '',
    });
  };

  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 200 }}
      animate={{ y: inView ? 0 : 200 }}
      transition={{ duration: 1 }}
    >

    <section id='contact' className="contact-form-section">
      <h2 className="heading">Creating magic with colors, <span> Let’s paint your story</span></h2> 
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={formData.from_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Your Email"
          value={formData.reply_to}
          onChange={handleChange}
          required
        />
        {/* <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={formData.password}
          onChange={handleChange}
          required
        /> */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
    </motion.div>
  );
};

export default ContactForm;