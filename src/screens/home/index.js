import { useEffect } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

import './style.scss';

const Intro = () => {
  useEffect(() => {
    const fetchQuote = async () => {
      const quote = await axios.get(
        'https://game-of-thrones-quotes.herokuapp.com/v1/random'
      );
      console.log(quote);
    };

    fetchQuote();
  }, []);
  return (
    <div id='home'>
      <div className='home__container'>
        <div className='container__text'>
          <h1>
            Hi, I am <span className='text__name'>Pape</span>{' '}
            <span className='text__emoji'>&#128512;</span>
          </h1>
          <div className='text__title'>
            Software Developer @ Dartmouth College
          </div>
        </div>
      </div>
      <Link to={ROUTES.projects} className='homeButton'>
        <div className='button__text'>View My Projects </div>
        <ArrowRightOutlined />
      </Link>
    </div>
  );
};

export default Intro;
