import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import companies from '../../data/companies';

import './style.scss';

const Intro = () => {
  const companieImages = companies.map((image) => {
    console.log("image",image)
    return <img src={image} alt="Company Logo"/>
  })

  return (
    <div id='home'>
      <div className='home__container'>
        <div className='container__text'>
          <h1>
            Hi, I am <span className='text__name'>Yamadou</span>{' '}
          </h1>
          <div className='text__title'>
            iOS Developer @ Worldline SA 
          </div>
        </div>
      </div>
      <Link to={ROUTES.projects} className='homeButton'>
        <div className='button__text'>View My Projects </div>
        <ArrowRightOutlined />
      </Link>

      <div className='home__companies'>
        <p>Companies I worked for</p>
        <div className="logos">
          {companieImages}
        </div>
      </div>
    </div>
  );
};

export default Intro;
