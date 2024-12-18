import React from 'react';

import { About, Footer, Header, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Testimonial />
    <Footer />
  </div>
);

export default App;