import React, {useEffect} from 'react';
import {useRoutes} from './routes';
import {BrowserRouter} from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Loader from './components/loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { initializeApp } from './redux/reducers/initializeReducer';

import './styles/style.scss';
import { getNotes } from './redux/actions/notes';
import { getFoods } from './redux/actions/foods';

function App() {

  const isAuth = useSelector(state => state.user.isAuth);

  const initialized = useSelector(state => state.initializedApp.initialized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) {
      dispatch(getNotes())
      dispatch(getFoods())
    }
}, [dispatch, isAuth]);

  const routes = useRoutes(isAuth);

  if(!initialized) {
    return (
      <Loader/>
    )
  }

  return (
      <BrowserRouter>
        <div className="app">
          {<Sidebar/>}
          {routes}
        </div>
      </BrowserRouter>
  );
}

export default App;
