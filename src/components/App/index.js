// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Experiences from 'src/components/Experiences';
import Interests from 'src/components/Interests';
import Menu from 'src/components/Menu';
import Projects from 'src/components/Projects';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Menu />
    <Experiences />
    <Projects />
    <Interests />
    <Footer />
  </div>
);

// == Export
export default App;
