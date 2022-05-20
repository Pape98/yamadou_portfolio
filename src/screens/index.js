import About from './about';
import Home from './home';
import Projects from './projects';

const Screens = ({ children }) => {
  return { children };
};

Screens.About = About;
Screens.Home = Home;
Screens.Projects = Projects;

export default Screens;
