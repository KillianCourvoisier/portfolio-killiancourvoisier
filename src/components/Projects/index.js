/* eslint-disable max-len */
import React from 'react';
import './style.scss';
import OboardScreen from 'src/images/oboardgame_screen.png';
import Sk3y7Screen from 'src/images/sk3y7screen.png';

const Projects = () => (
  <div className="projects">
    <div className="projects__title">Projets</div>
    <div className="projects__card_box">

      <div className="projects__card">
        <div className="projects__card__image">
          <img src={OboardScreen} alt="screen site oboardgame" />
        </div>
        <div className="projects__card__content">
          <div className="projects__card__content__name">Oboardgames</div>
          <div className="projects__card__content__excerpt">
            <p>Oboardgames est un projet de fin d'étude réalisé en Mars 2021 avec 4 autres camarades de promo chez <a href="http://oclock.io">O'clock &#9829;</a>.
            </p>
            <p>
              Le site n'est plus disponible en ligne, mais vous pouvez le retrouvez ici, sur mon Github!
            </p>
          </div>
        </div>
      </div>
      <div className="projects__card">
        <div className="projects__card__image">
          <img src={Sk3y7Screen} alt="screen site oboardgame" />
        </div>
        <div className="projects__card__content">
          <div className="projects__card__content__name">Sk3y7's Portfolio</div>
          <div className="projects__card__content__excerpt">
            <p>
              Ici il s'agit d'une commande "de famille". Ce projet est destiné à servir de portfolio photographique/vidéo/art graphique à mon frère , et partagé sa passion sur la toile.
            </p>
            <p>
              Retrouvez son site actuel <a href="https://sk3y7.myportfolio.com/work">ici</a>
            </p>
          </div>
        </div>
      </div>
      <div className="projects__card">
        <div className="projects__card__image">
          <img src={OboardScreen} alt="screen site oboardgame" />
        </div>
        <div className="projects__card__content">
          <div className="projects__card__content__name">Oboardgames</div>
          <div className="projects__card__content__excerpt">
            <p>Oboardgames est un projet de fin d'étude réalisé en Mars 2021 avec 4 autres camarades de promo chez <a href="http://oclock.io">O'clock &#9829;</a>.
            </p>
            <p>
              Le site n'est plus disponible en ligne, mais vous pouvez le retrouvez ici, sur mon Github!
            </p>
          </div>
        </div>
      </div>
      <div className="projects__card">
        <div className="projects__card__image">
          <img src={OboardScreen} alt="screen site oboardgame" />
        </div>
        <div className="projects__card__content">
          <div className="projects__card__content__name">Oboardgames</div>
          <div className="projects__card__content__excerpt">
            <p>Oboardgames est un projet de fin d'étude réalisé en Mars 2021 avec 4 autres camarades de promo chez <a href="http://oclock.io">O'clock &#9829;</a>.
            </p>
            <p>
              Le site n'est plus disponible en ligne, mais vous pouvez le retrouvez ici, sur mon Github!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
