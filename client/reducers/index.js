import { combineReducers } from 'redux';
import userReducer from './userReducer.js';
import eventReducer from './eventReducer.js';

const reducers = combineReducers({ users: userReducer, events: eventReducer });

export default reducers;