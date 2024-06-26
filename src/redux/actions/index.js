import * as constants from "../constants";

export const signIn = currentUser => ({
    type: constants.SIGN_IN,
    payload: currentUser
});
export const signOut = () => ({
    type: constants.SIGN_OUT,
});

export const showMessage = message => ({
    type: constants.SHOW_MESSAGE,
    payload: message
});

export const hideMessage = () => ({
    type: constants.HIDE_MESSAGE,
});

export const updateUserReviews = reviews => ({
    type: constants.UPDATE_USER_REVIEWS,
    payload: reviews
});

export const updateApprovedReviews = reviews => ({
    type: constants.UPDATE_APPROVED_REVIEWS,
    payload: reviews
});

export const updateNotApprovedReviews = reviews => ({
    type: constants.UPDATE_NOT_APPROVED_REVIEWS,
    payload: reviews
});