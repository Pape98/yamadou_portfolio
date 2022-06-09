import AboutCard from './components/about-card';
import './style.scss';

const About = () => {
  return (
    <div id='about'>
      <div className='about__container'>
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
    </div>
  );
};

export default About;
