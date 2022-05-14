import { LinkedinFilled, GithubFilled } from '@ant-design/icons';
import './style.scss';

const Footer = () => {
  return (
    <div id='footer'>
      <div>Developed by Pape Sow Traoré (2020)</div>
      <div className='footer__links'>
        <a href='https://www.linkedin.com/in/pape-sow-traore/' className='link'>
          <LinkedinFilled />
        </a>
        <a href='https://github.com/pape98' className='link'>
          <GithubFilled />
        </a>
      </div>
    </div>
  );
};

export default Footer;
