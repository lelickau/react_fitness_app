import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AuthPage from './pages/authPage/AuthPage';
import FoodPage from './pages/foodPage/FoodPage';
import HomePage from './pages/homePage/HomePage';
import NotesPage from './pages/notesPage/NotesPage';
import ScalePage from './pages/scalePage/ScalePage';
import WaterPage from './pages/waterPage/WaterPage';
import NoteEditPage from './pages/noteEditPage/NoteEditPage';

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
                {/* <Route path="/notes/:id">
                    <NoteEditPage />
                </Route> */}
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
            <Route path="/autorization" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/autorization"/>
        </Switch>
    )
}