import { ProjectCard, ProjectModal, Legend, Tools } from '../../components';

import projects from '../../data/projects';
import { nanoid } from 'nanoid';

import './style.scss';

const Projects = () => {
  const cards = Object.values(projects).map(project => (
    <ProjectCard key={nanoid()} project={project} />
  ));

  return (
    <div id='projects'>
      <div className='projects__panel'>
        <Legend />
        <Tools />
      </div>
      <div className='projects__cards'>{cards}</div>
      <ProjectModal />
    </div>
  );
};

export default Projects;
