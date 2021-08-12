import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { createBrowserHistory } from "history";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducer
import detailSlice from "./modules/detailSlice";
import option from "./modules/option";
import user from "./modules/User_module";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  detail: detailSlice.reducer,
  option: option,
  user: user,
  router: connectRouter(history),
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [...middlewares, ...getDefaultMiddleware()],
  devTools: env !== "production",
});
