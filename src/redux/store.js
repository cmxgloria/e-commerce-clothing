import { createStore, applyMiddleware } from "redux";
// persistStore allow app cache our store
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [logger];
// ...middlewares is spread, more scable to add more value in the [logger] array in future
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default { store, persistor };
