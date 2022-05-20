import ProjectModal from './components/project-modal';
import ProjectCard from './components/project-card';
import Legend from './components/legend';
import Tools from './components/tools';

import projects from '../../data/projects';
import { nanoid } from 'nanoid';

import './style.scss';

const Projects = () => {
  const cards = projects.map(project => (
    <ProjectCard key={nanoid()} project={project} />
  ));

  return (
    <div id='projects'>
      <div className='projects__panel'>
        <Legend />
        <Tools />
      </div>
      <div className='emptyContainer'></div>
      <div className='projects__cards'>{cards}</div>
      <ProjectModal />
    </div>
  );
};

export default Projects;
