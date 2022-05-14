import { Routes, Route } from 'react-router-dom';

import { Menu, Footer } from './components';

import { ROUTES } from './constants';
import Screens from './screens';

const App = () => {
  return (
    <>
      <Menu />
      <div id='mainContainer'>
        <Routes>
          <Route path={ROUTES.home} element={<Screens.Home />} />
          <Route path={ROUTES.projects} element={<Screens.Projects />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
