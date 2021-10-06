import React from 'react';
import {useRoutes} from './routes';
import {BrowserRouter} from 'react-router-dom';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

import './styles/style.scss';
import Sidebar from './components/sidebar/Sidebar';

function App() {

  // const tasksList = [
  //   {id: 'a1', title: 'Предусматривая возможность введения новых значений и значений с параметрами в будущем, для браузеров была реализована поддержка значений атрибута', marking: 'green', status: 'In the process'},
  //   {id: 'a2', title: 'Написать отзыв', marking: 'red', status: 'Done'},
  //   {id: 'a3', title: 'Заказать еду', marking: 'red', status: 'In the process'},
  //   {id: 'a4', title: 'Сходить в спортзал', marking: 'yellow', status: 'Done'},
  // ]
  const {token, login, logout, userId} = useAuth();
  const isAauthenticated = !!token;
  const routes = useRoutes(isAauthenticated);

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
