import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Rx';
import * as R from 'ramda';

import { Action, ErrorAction } from 'utilities.js';

// Actions
export const GET_FILMS_AJAX = 'FilmsLibrary/GET_FILMS_AJAX'
export const GET_FILMS_AJAX_STARTED = 'FilmsLibrary/GET_FILMS_AJAX_STARTED'
export const GET_FILMS_AJAX_COMPLETED = 'FilmsLibrary/GET_FILMS_AJAX_COMPLETED';
export const GET_FILMS_AJAX_ERROR = 'FilmsLibrary/GET_FILMS_AJAX_ERROR';

// Action Creators
export const getFilmsDispatch = (limit) => Action(GET_FILMS_AJAX, limit);

// Define the initial state for the reducer
const initialState = {
    ajaxCompletedSuccessfully: false,
    isLoading: false,
    filmData: {}
};

// Films Library Reducer
export function reducer(state = initialState, action) {
    const mergeToState = R.merge(state)

    switch (action.type) {
        case GET_FILMS_AJAX_STARTED:
            return mergeToState({
                isLoading: true,
            });
        case GET_FILMS_AJAX_COMPLETED:
            return mergeToState({
                ajaxCompletedSuccessfully: true,
                isLoading: false,
                filmData: action.payload.films || {},
            });
        case GET_FILMS_AJAX_ERROR:
            return mergeToState({
                isLoading: false
            });
        default:
            return state;
    }
}

// Epics
function getFilmsEpic(action$, store) {
    return action$.ofType(GET_FILMS_AJAX)
        .switchMap(function(action) {
            const limit = action.payload;

            return Observable.ajax({
                url: `http://www.snagfilms.com/apis/films.json?limit=${limit}`,
                method: 'GET',
                crossDomain: true
            })
            .map((data) => Action(GET_FILMS_AJAX_COMPLETED, data.response))
            .catch((error) => Observable.of(ErrorAction(GET_FILMS_AJAX_ERROR, error)))
            .startWith(Action(GET_FILMS_AJAX_STARTED))
        })
};

export const filmsLibraryEpic = combineEpics(
    getFilmsEpic
);
