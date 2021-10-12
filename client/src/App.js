import React from 'react';
import {useRoutes} from './routes';
import {BrowserRouter} from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import Sidebar from './components/sidebar/Sidebar';
import Loader from './components/loader/Loader';

import './styles/style.scss';

function App() {

  const {token, login, logout, userId, ready} = useAuth();
  const isAauthenticated = !!token;
  const routes = useRoutes(isAauthenticated);

  if(!ready) {
    return (
      <Loader/>
    )
  }

  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAauthenticated}}>
      <BrowserRouter>
        <div className="app">
          {isAauthenticated && <Sidebar/>}
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
