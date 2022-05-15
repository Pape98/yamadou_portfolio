import Intro from './intro';
import Projects from './projects';
import { ProjectModal } from '../../components';

const Home = () => {
  return (
    <>
      <Intro />
      <Projects />
      <ProjectModal />
    </>
  );
};

export default Home;
