import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AuthPage from './pages/authPage/AuthPage';
import FoodPage from './pages/foodPage/FoodPage';
import HomePage from './pages/homePage/HomePage';
import NotesPage from './pages/notesPage/NotesPage';
import RecoverPage from './pages/recoverPasswordPage/RecoverPage';
import RecoverPassword from './pages/recoverPasswordPage/RecoverPassword';

export const publicRoutes = [
    {path:  '/foods', exact: true, component: FoodPage},
    {path:  '/autorization', exact: true, component: AuthPage},
    {path:  '/recover/:token', exact: true, component: RecoverPassword},
    {path:  '/forget', exact: true, component: RecoverPage},
    {path: '/notes', exact: true, component: AuthPage},
]

export const privateRoutes = [
    {path: '/foods', exact: true, component: FoodPage},
    {path: '/home', exact: true, component: HomePage},
    {path: '/notes', exact: true, component: NotesPage},
]

export const useRoutes = (isAuth) => {
    return (
        <Switch>
            {
                isAuth ?
                privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                )
                :
                publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                )
            }
            <Redirect to="/foods"/>
        </Switch>
    )
}