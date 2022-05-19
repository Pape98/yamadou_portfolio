import { LinkedinFilled, GithubFilled } from '@ant-design/icons';
// import SenegalFlag from '../senegal-flag';
import './style.scss';

const Footer = () => {
  return (
    <div id='footer'>
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
