// src/App.js
import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
