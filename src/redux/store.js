import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
//import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { fetchCollectionsStart } from "./shop/shop.sagas";

const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWare.run(fetchCollectionsStart);

export const persistor = persistStore(store);

export default { store, persistStore };
