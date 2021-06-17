/* eslint-disable max-len */
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
import OpquastLogo from 'src/images/badge_avance.svg';

const Experiences = () => (
  <div className="experiences">
    <div className="experiences__title">
      Developpement Web & Mobile
    </div>
    <div className="experiences__dev">
      <div className="experiences__actual">
        <div className="experiences__studies">
          <p>
            Fraichement sortie de l'école <a href="http://oclock.io">O'clock (&#9829;)</a>, promo Nautilus -OUH-AH!- (fin Mars 2021), je rejoins le monde du numérique. J'ai pu aborder la reconversion pro. à travers le socle de trois mois, où nous avons appris à maîtriser les languages HTML, CSS et Javascript.
          </p>
          <p>
            S'en est suivis une spécialisation que nous pouvions choisir alors pour moi , c'était direction Spé Data/API ! Une évidence , puisque passioné de nouvelles technologies, notamment par l'Intélligence Artificielle sous toutes ses applications ( scientifiques ou ludiques ! (∩｀-´)⊃━☆ﾟ.*･｡ﾟ. ).
          </p>
          <p>
            Pour finir nous avons été mis un mois en condition d'entreprise afin de réaliser un projet de fin d'étude en petit groupe (je vous en parle plus bas !). Cela nous à permis de travailler en collaboration pour appliqué ce que chacun avait appris durant la spécialisation dans le but de réaliser le projet le plus proche de l'idée que s'en faisait le Product Owner.
          </p>
          <p>
            Toute cette formation s'est déroulé en télé-présentiel.
            Tous les jours à la maison, mais en classe virtuelle avec un prof bien vivant, les camarades dans le chat et le tableau (l'écran partagé du prof en fait) sur lequel nous suivions les cours.
            Et le soir , ce n'était pas fini ! Des challenges, plus ou moins gros, pour mettre en application les notions vu dans la journée et, souvent, quelques notions pour le lendemain afin de nous apprendre a chercher et comprendre une information, une doc, un outils ...
          </p>
          <p>
            J'ai pris le temps, après la présentation du projet de fin d'étude, de passer le certificat <a href="http://opquast.com">Opquast</a> et de l'obtenir avec 835/1000 points. J'ai ensuite suivi la spé Front - React que l'école nous a rendu accessible à la fin de la formation
          </p>
          <div className="opquast__logo"><img src={OpquastLogo} alt="logo opquast avancé" /></div>
          <p>
            Je suis heureux de ma reconversion, je pense avoir trouver la voie dans laquelle je pourrais m'épanouire pleinement, dans la vie professionnelle comme personnelle.
          </p>
        </div>
        <div className="stack__title">Stack</div>
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
