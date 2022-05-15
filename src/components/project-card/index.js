import { useContext } from 'react';
import { GithubFilled } from '@ant-design/icons';
import { nanoid } from 'nanoid';

import { StoreContext } from '../../contexts';
import { ACTIONS, TAG_COLORS } from '../../constants';
import { Tag } from '..';
import './style.scss';

const ProjectCard = ({ project }) => {
  const { dispatch } = useContext(StoreContext);

  const tags = project.tags.split(',').map(tag => {
    return (
      <Tag key={nanoid()} color={TAG_COLORS[tag]}>
        {tag}
      </Tag>
    );
  });

  return (
    <div
      className='projectCard'
      onClick={() =>
        dispatch({ type: ACTIONS.SELECT_PROJECT, payload: project })
      }
    >
      <div className='card__left'>
        <div className='cardImage'></div>
      </div>

      <div className='card__right'>
        <div className='cardTitleLink'>
          <h2 className='cardTitle'>{project.title}</h2>
          <div className='cardLink'>
            <a href='www.github.com'>
              <GithubFilled />
            </a>
          </div>
        </div>
        <div className='cardSummary'>
          {' '}
          <p>{project.summary}</p>{' '}
        </div>
        <div className='cardTags'>{tags}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
