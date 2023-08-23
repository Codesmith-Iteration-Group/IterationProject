import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/index.js';
import { getHostEvents, getPartEvents } from './actions/actions.js';

const store = configureStore({ reducer: reducers })

store.dispatch(getHostEvents());
store.dispatch(getPartEvents());

export default store;