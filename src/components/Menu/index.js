import React from 'react';
import './style.scss';

const Menu = () => (
  <div className="menu">
    <button type="button" className="menu__track"> Parcours pro</button>
    <button type="button" className="menu__hobbies"> Hobbies</button>
    <button type="button" className="menu__projects"> Projets</button>
  </div>
);

export default Menu;
