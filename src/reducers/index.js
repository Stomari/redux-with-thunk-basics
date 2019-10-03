import { counterReducer, imageReducer } from './reducers';
import { combineReducers } from 'redux';

/* 
    As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.

    The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
*/

export const rootReducer = combineReducers({
    counter: counterReducer,
    image: imageReducer
});