import {combineReducers} from "redux";
import {authorizationReducer} from "./authorizationReducer";
import {reviewReducer} from "./reviewReducer";
import {messageReducer} from "./messageReducer";

export const rootReducer = combineReducers({
    message: messageReducer,
    authorization: authorizationReducer,
    review: reviewReducer,
});