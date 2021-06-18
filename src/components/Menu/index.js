import React from 'react';
import './style.scss';

const Menu = () => (
  <div className="menu">
    <div className="menu__track"> <a href="#exp-pro">Parcours pro</a></div>
    <div className="menu__track"> <a href="#other-exp">Autres exp</a></div>
    <div className="menu__projects"> <a href="#projects">Projets</a></div>
    <div className="menu__hobbies"> <a href="#interests">Intérêts</a></div>
  </div>
);

export default Menu;
