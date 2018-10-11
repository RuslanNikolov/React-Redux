import notesReducer from './notesReducer';
import jokesReducer from './jokesReducer';
import eventsReducer from './eventsReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    notes: notesReducer,
    jokes: jokesReducer,
    events: eventsReducer})


    