/* eslint-disable max-len */
import React from 'react';
import './style.scss';

import projectsData from 'src/data/projects';

import OboardScreen from 'src/images/oboardgame_screen.png';

const Projects = () => (
  <div id="projects" className="projects">
    <div className="projects__title">Projets</div>
    <div className="projects__card_box">
      {
        // eslint-disable-next-line no-unused-vars
        projectsData.map((item, i) => (

          <div className="projects__card" key={item.id}>
            <div className="projects__card__image">
              <img src={OboardScreen} alt="screen site oboardgame" />
            </div>
            <div className="projects__card__content">
              <div className="projects__card__content__name"><a href="https://github.com/KillianCourvoisier/oboardgame-project-Nautilus">{item.name}</a></div>
              <div className="projects__card__content__excerpt">
                <p>{item.excerpt}
                </p>
              </div>
            </div>
          </div>

        ))
      }

    </div>
  </div>
);

export default Projects;
