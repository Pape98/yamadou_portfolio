import { GithubFilled } from '@ant-design/icons';
import './style.scss';

const ProjectCard = ({ title, summary, githubLink }) => {
  return (
    <div className='projectCard'>
      <div className='cardImageContainer'>
        <div className='cardImage'></div>
        <div className='imageOverlay'></div>
      </div>
      <div className='cardTitleLink'>
        <h2 className='cardTitle'>Nestflix</h2>
        <div className='cardLink'>
          <a href='www.github.com'>
            <GithubFilled />
          </a>
        </div>
      </div>
      <div className='cardSummary'>
        <p>
          {' '}
          A wiki dressed up as a streaming platform that catalogs fictional
          films and tv shows inside real movies and tv shows.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
