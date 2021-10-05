import React from 'react';
import {useRoutes} from './routes';
import {BrowserRouter} from 'react-router-dom';

import './styles/style.scss';

function App() {

  // const tasksList = [
  //   {id: 'a1', title: 'Предусматривая возможность введения новых значений и значений с параметрами в будущем, для браузеров была реализована поддержка значений атрибута', marking: 'green', status: 'In the process'},
  //   {id: 'a2', title: 'Написать отзыв', marking: 'red', status: 'Done'},
  //   {id: 'a3', title: 'Заказать еду', marking: 'red', status: 'In the process'},
  //   {id: 'a4', title: 'Сходить в спортзал', marking: 'yellow', status: 'Done'},
  // ]

  const routes = useRoutes(false);

  return (
    <BrowserRouter>
      <div className="app">
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
