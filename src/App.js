import { Routes, Route } from 'react-router-dom';

import { Menu, Footer } from './components';
import { Home } from './screens';
import { ROUTES } from './constants';

const App = () => {
  return (
    <>
      <Menu />
      <div id='mainContainer'>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
