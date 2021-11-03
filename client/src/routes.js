import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import EditNote from './components/editNote/EditNote';
import AuthPage from './pages/authPage/AuthPage';
import FoodPage from './pages/foodPage/FoodPage';
import HomePage from './pages/homePage/HomePage';
import NotesPage from './pages/notesPage/NotesPage';


export const useRoutes = (isAuth) => {

    if (isAuth) {
        return (
            <Switch>
                <Route path="/home" exact>
                    <HomePage/>
                </Route>
                <Route path="/notes" exact>
                    <NotesPage/>
                </Route>
                <Route path="/notes/edit/:id" exact>
                    <EditNote/>
                </Route>
                <Route path="/foods" exact>
                    <FoodPage/>
                </Route>
                <Redirect to="/home" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/autorization" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/autorization"/>
        </Switch>
    )
}