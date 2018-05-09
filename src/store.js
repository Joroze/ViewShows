import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux';
import { combineEpics } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createEpicMiddleware } from 'redux-observable';
import {
    reducer as filmsReducer,
    filmsLibraryEpic
} from './ducks/FilmsLibrary.duck.js'

export const rootEpic = combineEpics(
    filmsLibraryEpic
);

const rootReducer = combineReducers({
    filmsLibrary: filmsReducer
});

const epicMiddleware = createEpicMiddleware(rootEpic)
const middleWare = applyMiddleware(epicMiddleware);
const store = createStore(rootReducer, composeWithDevTools(middleWare));

export default store;
