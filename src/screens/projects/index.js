import ProjectCard from './components/project-card';
import { PageTitle } from '../../components';

import projects from '../../data/projects.json';
import { nanoid } from 'nanoid';

import './style.scss';

const Projects = () => {
  const cards = Object.values(projects).map(project => (
    <ProjectCard key={project.title} />
  ));

  return (
    <div id='projects'>
      <div className='projects__cards'>{cards}</div>
    </div>
  );
};

export default Projects;
