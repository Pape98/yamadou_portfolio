import './style.scss';

const Home = () => {
  return (
    <div id='home'>
      <div className='home__container'>
        <div className='container__image'>
          <img src='images/profile.png' alt='profile_image' />
        </div>
        <div className='container__text'>
          <h1>
            Hi, I am <span className='text__name'>Pape</span>{' '}
            <span className='text__emoji'>&#128512;</span>
          </h1>
          <div className='text__title'>Software Developer, Dartmouth Grad</div>
          <div className='text__location'>From Dakar, Senegal</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
