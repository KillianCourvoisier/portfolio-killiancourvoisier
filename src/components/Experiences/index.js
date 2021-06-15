import React from 'react';
import './style.scss';
import OtherJobs from 'src/components/OtherJobs';

import NodesJSLogo from 'src/images/nodejs-seeklogo.com.svg';
import SqitchLogo from 'src/images/sqitch-mark.svg';
import PsqlLogo from 'src/images/elephant-psql.png';
import SequelizeLogo from 'src/images/sequelize-seeklogo.com.svg';
import ExpressLogo from 'src/images/express-js-seeklogo.com.svg';
import StrapiLogo from 'src/images/hp-logo-hero_c94026101f.svg';
import InsomniaLogo from 'src/images/insomnia-seeklogo.com.svg';
import ReactLogo from 'src/images/React-icon.svg';
import ReduxLogo from 'src/images/redux-logo-vector.svg';
import SassLogo from 'src/images/Sass_Logo_Color.svg';
import NpmLogo from 'src/images/Npm-logo.svg';
import YarnLogo from 'src/images/yarn.svg';
import GitLogo from 'src/images/Git_icon.svg';
import ChaiLogo from 'src/images/chai-logo.png';
import MochaLogo from 'src/images/mocha-seeklogo.com.svg';

const Experiences = () => (
  <div className="experiences">
    <div className="experiences__title">
      Developpement Web & Mobile
    </div>
    <div className="experiences__dev">
      <div className="experiences__actual">
        <div className="experiences__studies">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam et dolore magna aliqua.
        </div>
        <div className="stack__title">Stack Actuel :</div>
        <div className="experiences__stack">
          <div className="experiences__stack__category">
            <div className="experiences__stack__category__title">Back</div>
            <div className="experiences__stack__back">
              <div className="stack__logo"><img src={NodesJSLogo} alt="logo NodesJS" /></div>
              <div className="stack__logo"><img src={SqitchLogo} alt="logo Sqitch" /></div>
              <div className="stack__logo"><img src={PsqlLogo} alt="logo PostgreSQL" /></div>
              <div className="stack__logo"><img src={SequelizeLogo} alt="logo Sequelize" /></div>
              <div className="stack__logo"><img src={ExpressLogo} alt="logo Express" /></div>
              <div className="stack__logo"><img src={StrapiLogo} alt="logo Strapi" /></div>
              <div className="stack__logo"><img src={InsomniaLogo} alt="logo Insomnia" /></div>
            </div>
          </div>

          <div className="experiences__stack__category">
            <div className="experiences__stack__category__title">Front</div>
            <div className="experiences__stack__front">
              <div className="stack__logo"><img src={ReactLogo} alt="logo React" /></div>
              <div className="stack__logo"><img src={ReduxLogo} alt="logo Redux" /></div>
              <div className="stack__logo"><img src={SassLogo} alt="logo Sass" /></div>
            </div>
          </div>

          <div className="experiences__stack__category">
            <div className="experiences__stack__category__title">Outils</div>
            <div className="experiences__stack__tools">
              <div className="stack__logo"><img src={NpmLogo} alt="logo NPM" /></div>
              <div className="stack__logo"><img src={YarnLogo} alt="logo Yarn" /></div>
              <div className="stack__logo"><img src={GitLogo} alt="logo Git" /></div>
              <div className="stack__logo"><img src={ChaiLogo} alt="logo Chai" /></div>
              <div className="stack__logo"><img src={MochaLogo} alt="logo Mocha" /></div>

            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="experiences__other">
      <div className="experiences__title">Autres expériences pro.</div>
      <div className="experiences__card">
        <OtherJobs />
      </div>
    </div>
  </div>
);

export default Experiences;
