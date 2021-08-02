import React from 'react';
import './style.scss';

const Menu = () => (
  <div className="menu">
    <a href="#exp-pro"><div className="menu__track"> Parcours pro</div></a>
    <a href="#other-exp"> <div className="menu__track"> Autres exp</div></a>
    <a href="#projects"><div className="menu__projects"> Projets</div></a>
    <a href="#interests"><div className="menu__hobbies"> Intérêts</div></a>
  </div>
);

export default Menu;
