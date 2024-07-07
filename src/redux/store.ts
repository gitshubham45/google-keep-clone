import { createStore } from 'redux';
import noteReducer from './reducer';

const store = createStore(noteReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
