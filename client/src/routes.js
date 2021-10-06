import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AuthPage from './pages/authPage/AuthPage';
import FoodPage from './pages/foodPage/FoodPage';
import HomePage from './pages/homePage/HomePage';
import NotesPage from './pages/notesPage/NotesPage';
import ScalePage from './pages/scalePage/ScalePage';
import WaterPage from './pages/waterPage/WaterPage';

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
                <Route path="/water" exact>
                    <WaterPage/>
                </Route>
                <Route path="/food" exact>
                    <FoodPage/>
                </Route>
                <Route path="/scale" exact>
                    <ScalePage/>
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