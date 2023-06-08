import postsReducer from "./reducers/Reducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    reducers:postsReducer
})
export default rootReducers