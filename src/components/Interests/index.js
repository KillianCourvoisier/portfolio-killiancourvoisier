/* eslint-disable max-len */
import React from 'react';
import './style.scss';

import MusicIcon from 'src/images/007-music.svg';
import TravelIcon from 'src/images/008-yacht.svg';
import GamesIcon from 'src/images/001-retro-game.svg';
import ArchiIcon from 'src/images/002-architecture.svg';
import ScienceIcon from 'src/images/003-laboratory.svg';
import HistoryIcon from 'src/images/004-parchment.svg';
import CineIcon from 'src/images/005-film-reel.svg';
import AiIcon from 'src/images/006-ai.svg';

const Interests = () => (
  // Icons made by https://www.freepik.com from https://www.flaticon.com/
  <div id="interests" className="interests">
    <div className="interests__title">Centres d'intérêt</div>
    <div className="interests__grid">
      <div className="grid__items">
        <img src={MusicIcon} alt="music icon" />
        <div className="grid__items__content__title">
          La Musique
        </div>
        <div className="grid__items__content">
          Aaaah la musique ! Je la pratique, je la transforme, je l'écoute, je l'aime sous toutes ses formes,
          dans tout ses styles (ou presque !).
          Rien de mieux que la musique, si elle n'existait pas, il faudrait l'inventer.
        </div>
      </div>
      <div className="grid__items">
        <img src={TravelIcon} alt="music icon" />
        <div className="grid__items__content__title">
          Les Voyages
        </div>
        <div className="grid__items__content">
          J'ai passé ma vie a déménager dû au mutations professionnelles de mes parents.
          J'aime particulièrement le côté découverte culinaire, manger est une vrai passion également (d'ailleurs j'hésite à en faire une carte sup.)
          Et changer de contexte fait tellement de bien ..!
          Les Caraïbes, l'Amazonie, le Maghreb, les USA, l'Europe ... Les voyages ne forment-t-ils pas la jeunesse ?
        </div>
      </div>
      <div className="grid__items">
        <img src={GamesIcon} alt="music icon" />
        <div className="grid__items__content__title">
          Les Jeux Vidéos
        </div>
        <div className="grid__items__content">
          Une grande passion également ! Tout m'intéresse là dedans, de la conception à la mise en production,
          des scénarii aux modèles 3D/2D, des animations à toute la partie Sound Design, l'IA ... C'est un peu ce qui m'as orienté
          sur le développement, je caresse le doux rêve de pouvoir dire un jour : "j'ai créer un jeu vidéo !".
        </div>
      </div>
      <div className="grid__items">
        <img src={ArchiIcon} alt="music icon" />
        <div className="grid__items__content__title">
          L'Architecture
        </div>
        <div className="grid__items__content">
          Et tout ce que ça implique également. Je suis fasciné par notre capacité a hériger de telles structures depuis toujours.
          J'englobe ici l'ingénieurie civil en général, les ponts, les routes, l'urbanisme ancien ou actuel.
          Les solutions que l'on a su développer face à des contraintes très spécifiques, la pérénité de certaines, le style d'autres...
          Enfin voilà, fascinant je vous dit !
        </div>
      </div>
      <div className="grid__items">
        <img src={ScienceIcon} alt="music icon" />
        <div className="grid__items__content__title">
          Les Sciences
        </div>
        <div className="grid__items__content">
          Un peu comme pour l'Architecture, tout les aspects des sciences suscitent chez moi une curiosté.
          La Biologie, la Chimie, la Physique, l'Anthropologie [...]
          sont autant de disciplines qui m'intrigue de par leur complexité et ...
        </div>
      </div>
      <div className="grid__items">
        <img src={HistoryIcon} alt="music icon" />
        <div className="grid__items__content__title">
          L'Histoire
        </div>
        <div className="grid__items__content">
          ... et leur Histoire respective !
          Et quand on s'intéresse à l'Histoire, on se rend compte des liens, du passé, et d'où on vient.
          Les chemins empruntés , les contextes d'époques, nous rappel que les temps changent et nous permettent de prendre
          du recul sur nos connaissances. C'est important pour se comprendre soi-même, les autres et le monde.
          J'aime l'Histoire avec un grand "H" pour toutes celles qui ne nous sont jamais parvenues.
        </div>
      </div>
      <div className="grid__items">
        <img src={CineIcon} alt="music icon" />
        <div className="grid__items__content__title">
          Le Cinema
        </div>
        <div className="grid__items__content">
          Parceque le Cinéma c'est beau, c'est grand et ça t'en met pleins la vue (ou à ta place, au choix).
          Avec un faible pour celui des années 80/90, on va pas se mentir. Et puis les chefs-d'oeuvres un peu plus tardifs,
          bien sûr comme le Seigneur des Anneaux ou Pirates des Caraïbes (les premiers, après ils ont déconné, comme d'hab...)
          Les émotions, les ambiances, parfois les musiques, finalement un peu comme pour le jeu vidéo tout dans le cinéma me botte
          L'ésthétique de certain, les dialogues d'un tel ou le sujet d'un autre ... Bref encore, fascinant !
        </div>
      </div>
      <div className="grid__items">
        <img src={AiIcon} alt="music icon" />
        <div className="grid__items__content__title">
          L'Intélligence Artificielle
        </div>
        <div className="grid__items__content">
          Et enfin le dernier mais pas des moindres.
          Parce que l'IA, c'est ouf et ça peut toucher à tout ce que j'ai cité à côté. Alors oui , j'aime l'IA, parce que.(っ▀¯▀)つ
        </div>
      </div>
    </div>
  </div>
);

export default Interests;
