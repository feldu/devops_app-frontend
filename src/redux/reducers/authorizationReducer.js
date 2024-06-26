import * as constants from "../constants";


const initialState = {
    currentUser: {username: "Your name"},
};

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SIGN_IN:
            return {...state, currentUser: action.payload};
        case constants.SIGN_OUT:
            return {...state, currentUser: {username: null}};
        default:
            return state;
    }
};