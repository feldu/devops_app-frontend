import * as constants from "../constants";

const initialState = {
    userReviews: [],
    approvedReviews: [],
    notApprovedReviews: []
};


export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.UPDATE_USER_REVIEWS:
            return {...state, userReviews: action.payload};
        case constants.UPDATE_APPROVED_REVIEWS:
            return {...state, approvedReviews: action.payload};
        case constants.UPDATE_NOT_APPROVED_REVIEWS:
            return {...state, notApprovedReviews: action.payload};
        default:
            return state;
    }
};