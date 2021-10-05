import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AuthPage from './pages/authPage/AuthPage';
import HomePage from './pages/homePage/HomePage';
import NotesPage from './pages/notesPage/NotesPage';

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/home" exact>
                    <HomePage/>
                </Route>
                <Route path="/notes" exact>
                    <NotesPage/>
                </Route>
                <Redirect to="/home" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}