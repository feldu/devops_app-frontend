import * as actions from "../actions";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:31510";

export function showMessage(message) {
    return function (dispatch) {
        dispatch(actions.showMessage(message));
        setTimeout(() => dispatch(actions.hideMessage()), 3000)
    };
}

export function registerUser(user) {
    return function (dispatch) {
        axios
            .post('/auth/signup', {
                username: user.username,
                password: user.password,
                name: user.name,
                roleNames: [user.role]
            })
            .then(response => {
                dispatch(showMessage({message: response.data, isError: false}))
            })
            .catch(e => {
                if (e.response.status === 400)
                    dispatch(showMessage({message: e.response.data, isError: true}));
                else handleError(e, dispatch)
            });

    }
}

export function loginUser(user) {
    return function (dispatch) {
        let formData = new FormData();
        formData.append('username', user.username);
        formData.append('password', user.password);
        axios
            .post('/auth/signin', formData)
            .then(response => {
                if (response.status === 200) {
                    let url = new URL(response.request.responseURL);
                    if (url.searchParams.has("error"))
                        dispatch(showMessage({message: "Не удалось войти", isError: true}));
                    else {
                        window.location.href = response.request.responseURL;
                    }
                }
            })
            .catch(e => handleError(e, dispatch));
    }
}

export function getUserInfo() {
    return function (dispatch) {
        axios
            .get('/user/authenticated')
            .then(response => {
                if (response.status === 200) {
                    dispatch(actions.signIn(response.data));
                }
            }).catch(e => handleError(e, dispatch));
    }
}

export function logout() {
    return function (dispatch) {
        axios
            .post('/auth/logout')
            .then(response => {
                    if (response.status === 200) {
                        window.location.href = response.request.responseURL;
                    }
                }
            )
            .catch(e => handleError(e, dispatch));
        dispatch(actions.signOut());
    }
}

export function getReviewsByUser(authorName) {
    return function (dispatch) {
        axios
            .get(`/review/authorName/${authorName}`)
            .then(response => {
                dispatch(actions.updateUserReviews(response.data));
            })
            .catch(e => handleError(e, dispatch));
    }
}

export function getReviewsByApproveTrue() {
    return function (dispatch) {
        axios
            .get(`/review/approved/true`)
            .then(response => {
                dispatch(actions.updateApprovedReviews(response.data));
            })
            .catch(e => handleError(e, dispatch));
    }
}

export function getReviewsByApproveFalse() {
    return function (dispatch) {
        axios
            .get(`/review/approved/false`)
            .then(response => {
                dispatch(actions.updateNotApprovedReviews(response.data));
            })
            .catch(e => handleError(e, dispatch));
    }
}

export function addReview(review) {
    return function (dispatch) {
        axios
            .post('/review/', {
                ...review,
            })
            .then(response => {
                if (response.status === 200) {
                    dispatch(getReviewsByUser(review.authorName));
                }
            })
            .catch(e => handleError(e, dispatch));
    }
}

export function removeReviewById(reviewId) {
    return function (dispatch) {
        axios
            .delete(`/review/${reviewId}`)
            .then(response => {
                if (response.status === 200) {
                    dispatch(getReviewsByApproveTrue());
                    dispatch(getReviewsByApproveFalse());
                }
            })
            .catch(e => handleError(e, dispatch));
    }
}

export function applyReviewById(reviewId) {
    return function (dispatch) {
        axios
            .patch(`/review/approval/${reviewId}`, {
                "approved": "true",
            })
            .then(response => {
                if (response.status === 200) {
                    dispatch(getReviewsByApproveTrue());
                    dispatch(getReviewsByApproveFalse());
                }
            })
            .catch(e => handleError(e, dispatch));
    }
}

function handleError(e, dispatch) {
    if (e.response.status === 400)
        dispatch(showMessage({message: "Ошибка пользовательского ввода", isError: true}));
    if (e.response.status === 404)
        dispatch(showMessage({message: "Выбранное вами сущее не существует", isError: true}));
    if (e.response.status === 500)
        dispatch(showMessage({message: "Произошла какая-то...", isError: true}));
}