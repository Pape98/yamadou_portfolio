import { GithubFilled } from '@ant-design/icons';
import { TAG_COLORS } from '../../constants';
import { Tag } from '..';
import './style.scss';

const ProjectCard = ({ project }) => {
  const tags = project.tags[0].split(',').map(tag => {
    return <Tag color={TAG_COLORS[tag]}>{tag}</Tag>;
  });

  return (
    <div className='projectCard'>
      <div className='cardTitleLink'>
        <h2 className='cardTitle'>{project.title}</h2>
        <div className='cardLink'>
          <a href='www.github.com'>
            <GithubFilled />
          </a>
        </div>
      </div>
      <div className='cardImage'></div>
      <div className='cardSummary'>
        {' '}
        <p>
          A wiki dressed up as a streaming platform that catalogs fictional
          films and tv shows inside real movies and tv shows.
        </p>{' '}
      </div>
      <div className='cardTags'>{tags}</div>
    </div>
  );
};

export default ProjectCard;
