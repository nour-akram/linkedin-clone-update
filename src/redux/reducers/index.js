import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articlesReducer from "./articlesReducer";

const rootReducer = combineReducers({
    userState : userReducer,
    articlesState:articlesReducer,
})
export default rootReducer