import React from 'react';
import './style.scss';

// import HeaderFlags from 'src/components/Header/HeaderFlags';

const Header = () => (
  <div className="header">
    {/* <HeaderFlags /> */}
    <div className="header__infos">
      <div className="header__img">
        <img src="https://avatars.githubusercontent.com/u/71069962?s=400&v=4" alt="user avatar" />
      </div>
      <div className="header__infos_box">
        <h1>Killian Courvoisier</h1>
        <h2>Developpeur FullStack Javascript</h2>
        <div className="header__infos__secret">mais je préfère le Back ( ˘ ³˘)</div>
        <p>dev.killian.courvoisier@gmail.com</p>
        <p>06.59.58.70.05</p>
      </div>
    </div>

  </div>
);

export default Header;
