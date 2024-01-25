import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/AuthSlice";
// import { contactApi } from "../components/slices/ContactSlice";
import api from "./api";


const store = configureStore({
  reducer: {
     [api.reducerPath]: api.reducer,
    //  [contactApi.reducerPath]: contactApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
