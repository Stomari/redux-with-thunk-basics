import { 
    INCREMENT,
    SUM,
    SET_IMAGE,
    SHOW_IMAGE
} from '../actions/actionTypes';

// Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

const initialState = {
    num: 0,
    imageUrl: ''
}

// Now that we've decided what our state object looks like, we're ready to write a reducer for it. The reducer is a pure function that takes the previous state and an action, and returns the next state.

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: 
            return {
                ...state,
                num: state.num += 1
            };
        case SUM:
            return {
                ...state,
                num: state.num + action.payload
            }
        default:
            return state;
    }
}

export const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_IMAGE:
            return {
                ...state,
                imageUrl: action.payload.url
            };
        default:
            return state;
    }
}

/* 
    Things you should never do inside a reducer:

    - Mutate its arguments;
    - Perform side effects like API calls and routing transitions;
    - Call non-pure functions, e.g. Date.now() or Math.random(). 
*/
