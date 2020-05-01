import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];
// ...middlewares is spread, more scable to add more value in the [logger] array in future
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
