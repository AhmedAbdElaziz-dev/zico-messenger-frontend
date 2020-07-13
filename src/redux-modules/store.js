import { combineReducers, compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./user/reducer";
import messegeReducer from "./messege/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  user: userReducer,
  messege: messegeReducer,
});

export default process.env.NODE_ENV === "development"
  ? createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
  : createStore(rootReducer, applyMiddleware(thunk));
