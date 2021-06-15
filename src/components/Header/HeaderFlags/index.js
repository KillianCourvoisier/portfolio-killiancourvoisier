import React from 'react';
import './style.scss';

import UkFlag from 'src/images/002-united-kingdom.svg';
import FrFlag from 'src/images/001-france.svg';
import SpFlag from 'src/images/003-spain.svg';

const HeaderFlags = () => (
  // Icons made by https://www.freepik.com from https://www.flaticon.com/
  <div className="flag">
    <img src={UkFlag} alt="uk flag" />
    <img src={FrFlag} alt="uk flag" />
    <img src={SpFlag} alt="uk flag" />
  </div>
);

export default HeaderFlags;
