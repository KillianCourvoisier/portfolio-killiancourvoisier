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
  <div className="interests">
    <div className="interests__title">Centres d'intérêt</div>
    <div className="interests__grid">
      <div className="grid__items"><img src={MusicIcon} alt="music icon" /></div>
      <div className="grid__items"><img src={TravelIcon} alt="music icon" /></div>
      <div className="grid__items"><img src={GamesIcon} alt="music icon" /></div>
      <div className="grid__items"><img src={ArchiIcon} alt="music icon" /></div>
      <div className="grid__items"><img src={ScienceIcon} alt="music icon" /></div>
      <div className="grid__items"><img src={HistoryIcon} alt="music icon" /></div>
      <div className="grid__items"><img src={CineIcon} alt="music icon" /></div>
      <div className="grid__items"><img src={AiIcon} alt="music icon" /></div>
    </div>
  </div>
);

export default Interests;
