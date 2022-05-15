import { Routes, Route } from 'react-router-dom';
import { useReducer, useEffect } from 'react';

import { ACTIONS } from './constants';
import { StoreContext } from './contexts';
import { Menu, Footer } from './components';
import Screens from './screens';
import { ROUTES } from './constants';

const initialState = {
  selectedProject: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SELECT_PROJECT:
      return { ...state, selectedProject: action.payload };
    default:
      return;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <StoreContext.Provider value={{ state, dispatch }}>
        <div id='mainContainer'>
          <Menu />
          <Routes>
            <Route path={ROUTES.home} element={<Screens.Home />} />
            <Route path={ROUTES.projects} element={<Screens.Projects />} />
          </Routes>
        </div>
        <Footer />
      </StoreContext.Provider>
    </>
  );
};

export default App;
