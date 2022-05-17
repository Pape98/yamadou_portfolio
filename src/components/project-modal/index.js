import React, { useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { GithubFilled } from '@ant-design/icons';

import Carousel from './Carousel';
import { Tag } from '..';
import { StoreContext } from '../../contexts';
import { ACTIONS, TAG_COLORS } from '../../constants';

import './style.scss';

const DISPLAY = {
  none: 'none',
  block: 'block',
};

const ProjectModal = () => {
  const [display, setDisplay] = useState(DISPLAY.none);
  const { dispatch, state } = useContext(StoreContext);
  const { selectedProject: project } = state;

  const style = {
    display: display,
  };

  const tags = project.tags?.split(',').map(tag => {
    return (
      <Tag key={nanoid()} color={TAG_COLORS[tag]}>
        {tag}
      </Tag>
    );
  });

  useEffect(() => {
    if (Object.keys(state.selectedProject).length === 0) {
      setDisplay(DISPLAY.none);
    } else {
      setDisplay(DISPLAY.block);
    }
  }, [state]);

  const closeModal = () => {
    setDisplay(DISPLAY.none);
    dispatch({ type: ACTIONS.DESELECT_PROJECT });
  };

  return (
    <>
      <div className='modalBackground' style={style} onClick={closeModal}></div>
      <div className='modal' style={style}>
        <div className='modal__topBar'>
          <i className='ui close large icon' onClick={closeModal}></i>
        </div>
        <div className='modal__content'>
          <div className='images'>
            <div className='carouselContainer'>
              <Carousel images={project.images ? project.images : []} />
            </div>
          </div>
          <div className='details'>
            <div className='modal__yearLink'>
              <div className='label'>Year(s)</div>
              <div className='cardLink'>
                <a href={project.githubLink}>
                  <GithubFilled />
                </a>
              </div>
            </div>
            <div className='info'>{project.year}</div>
            <div className='label'>Tools</div>
            <div className='info cardTags'>{tags}</div>
          </div>
          <div className='summary'>
            <div className='label'>{project.title}</div>
            <div>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
