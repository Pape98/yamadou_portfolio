import { ArrowRightOutlined } from '@ant-design/icons';
import { SenegalFlag } from '../../components';
import './style.scss';

const Intro = () => {
  return (
    <div id='home'>
      <div className='home__container'>
        <div className='container__image'>
          <img src='/assets/images/profile.png' alt='profile_image' />
        </div>
        <div className='container__text'>
          <h1>
            Hi, I am <span className='text__name'>Pape</span>{' '}
            <span className='text__emoji'>&#128512;</span>
          </h1>
          <div className='text__title'>Software Developer, Dartmouth Grad</div>
          <div className='text__location'>
            From Dakar, Senegal <SenegalFlag />
          </div>
        </div>
      </div>
      <div className='homeButton'>
        <div className='button__text'>View My Projects </div>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Intro;
