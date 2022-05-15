import { ProjectCard, ProjectModal } from '../../components';

import projects from '../../data/projects.json';
import { nanoid } from 'nanoid';

import './style.scss';

const Projects = () => {
  const cards = Object.values(projects).map(project => (
    <ProjectCard key={nanoid()} project={project} />
  ));

  return (
    <div id='projects'>
      {/* <PageTitle title='PROJECTS' /> */}
      <div className='projects__cards'>{cards}</div>
      <ProjectModal />
    </div>
  );
};

export default Projects;
