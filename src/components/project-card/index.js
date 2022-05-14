import { GithubFilled } from '@ant-design/icons';
import { Tag } from '..';
import './style.scss';

const tagColors = {
  'NodeJs': '#85ce24',
  'Ruby on Rails': '#c60300',
  'MongoDB': '#11934f',
  'React': '#60dbfb',
};

const ProjectCard = ({ project }) => {
  const tags = project.tags[0].split(',').map(tag => {
    return <Tag color={tagColors[tag]}>{tag}</Tag>;
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
      </div>{' '}
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
