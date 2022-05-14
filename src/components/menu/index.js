import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../constants';
import './style.scss';

const Menu = () => {
  return (
    <nav id='menu'>
      <div className='menu__home'>PT</div>
      <div className='menu__right'>
        <ul>
          <NavLink
            to={ROUTES.home}
            className={isActive => (!isActive ? ' menu-item--selected ' : '')}
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to={ROUTES.projects}
            className={isActive => (!isActive ? ' menu-item--selected ' : '')}
          >
            <li>Projects</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
