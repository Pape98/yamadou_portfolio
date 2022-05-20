import React from 'react';
import { Segment } from '../../../../components';

import './style.scss';

const Legend = () => {
  return (
    <div className='legend'>
      <Segment>
        <h5>Legend</h5>
        <div className='tags__list'>
          <div className='list__item'>
            <i className='user icon'></i>
            <p>Individual work</p>
          </div>
          <div className='list__item'>
            <i className='users icon'></i>
            <p>Team work</p>
          </div>
          <div className='list__item'>
            <i className='spinner icon'></i>
            <p>Work in progress</p>
          </div>
          <div className='list__item'>
            <i className='lock icon'></i>
            <p>Private organization repo</p>
          </div>
          <div className='list__item'>
            <i className='eye icon'></i>
            <p>Repo has link to preview app</p>
          </div>
        </div>
      </Segment>
    </div>
  );
};

export default Legend;
