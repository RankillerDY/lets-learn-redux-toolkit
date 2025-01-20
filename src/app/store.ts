import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import { apiSlice } from "../features/dogs/dogs-api-slice";

//configureStore: A wrapper for create Redux store function but will automatically default configure
//for the store example it will setup Redux devtools extension, automatically add redux Thunk middleware

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  /**
   * Middleware between the store and slice
   * the getDefaultMiddleware is a default setting of redux toolkit
   * but we can add more middleware by using concat
   * apiSlice.middleware help manage cache
   */
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
