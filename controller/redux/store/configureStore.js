import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";

const middleware = [thunkMiddleware];

const makeConfiguredStore = (reducer) =>
  createStore(reducer, undefined, applyMiddleware(...middleware));

const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(rootReducer);
  } else {
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "nextjs",
      storage
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = makeConfiguredStore(persistedReducer);

    store.__persistor = persistStore(store);

    return store;
  }
}

export const store = makeStore()
