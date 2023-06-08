import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./rootReducer";


const middleWare = applyMiddleware(thunk,logger)
const store = createStore(rootReducers,composeWithDevTools(middleWare))

export default store;