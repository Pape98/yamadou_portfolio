import React from 'react';

import './style.scss';

const ProjectModal = () => {
  return (
    <div id='modal'>
      <div className='modal__content'>
        <div className='images'>Images</div>
        <div className='details'>
          <div>Year</div>
          <div>Tools</div>
        </div>
        <div className='summary'>
          <div>Project Title</div>
          <div>Description</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
