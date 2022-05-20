import { Link, useLocation } from 'react-router-dom';

import { ROUTES } from '../../constants';
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

        <Link
          to={ROUTES.about}
          className={pathname === '' ? 'menu-item--selected' : 'menu-item'}
        >
          <li>About</li>
        </Link>

        <Link
          to={ROUTES.projects}
          className={
            pathname === ROUTES.projects ? 'menu-item--selected' : 'menu-item'
          }
        >
          <li>Projects</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
