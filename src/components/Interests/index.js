/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState } from 'react';
import './style.scss';
import InterestsData from 'src/data/interests';

const Interests = () => {
  const [selected, setSelected] = useState(null);

  // eslint-disable-next-line consistent-return
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
  // Icons from https://www.iconfinder.com/
    <div id="interests" className="interests">
      <div className="interests__title">Centres d'intérêt</div>
      <div className="interests__grid">

        {
        InterestsData.map((item, i) => (
          <div className="grid__items" key={item.id} onClick={() => toggle(item.id)}>
            <img src={item.image} alt={item.image_alt} />
            <div className="grid__items__content__title">
              {item.title}
            </div>
            <div className="grid__items__content">
              {item.content}
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default Interests;
