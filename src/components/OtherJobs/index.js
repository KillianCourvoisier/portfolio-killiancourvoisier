import React, { useState } from 'react';
import './style.scss';

import otherJobsData from 'src/data/otherjobs';

const OtherJobs = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="timeline">
      {
    otherJobsData.map((item, i) => (

      <div className={item.id % 2 === 0 ? 'container left' : 'container right'}>
        <div className="content">
          <div className="header">
            <div className="left">
              <div className="date">{item.date}</div>
              <h2>{item.job} - {item.organization}</h2>
              <h3>{item.localisation}</h3>
            </div>
            <button type="button" className="button" onClick={() => toggle(i)}>
              {selected === i ? '↥' : '↧'}
            </button>
          </div>
          <div className={selected === i ? 'anecdote show' : 'anecdote'}>
            {item.anecdote}
          </div>
        </div>
      </div>

    ))
  }

    </div>
  );
};

export default OtherJobs;
