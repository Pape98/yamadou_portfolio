import { Link, useLocation } from 'react-router-dom';

import { ROUTES } from '../../constants';
import resume from '../../documents/resume.pdf'
import './style.scss';

const Menu = () => {
  const { pathname } = useLocation();

  return (
    <nav id='menu'>
      <ul>
        <Link
          to={ROUTES.home}
          className={
            pathname === ROUTES.home ? 'menu-item--selected' : 'menu-item'
          }
        >
          <li>Home</li>
        </Link>

        {/* <Link
          to={ROUTES.about}
          className={
            pathname === ROUTES.about ? 'menu-item--selected' : 'menu-item'
          }
        >
          <li>About</li>
        </Link> */}

        <Link
          to={ROUTES.projects}
          className={
            pathname === ROUTES.projects ? 'menu-item--selected' : 'menu-item'
          }
        >
          <li>Projects</li>
        </Link>
        <a className="menu-item" href = {resume} target = "_blank" rel="noreferrer">Resume</a>
      </ul>
    </nav>
  );
};

export default Menu;
