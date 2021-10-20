import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import notesReducer from './notesReducer';
import userReducer from './userReducer';
import initializeReducer from './initializeReducer';

const rootReducer = combineReducers({
    user: userReducer,
    notes: notesReducer,
    initializedApp: initializeReducer
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
export const store = createStore(rootReducer, composedEnhancer);