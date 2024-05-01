import { configureStore } from "@reduxjs/toolkit";
// import localizationReducer from "./Localization";
// import VariableReducer from "./variables";
// import authorizationReducer from "./Authorization";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import athRducer from "./authRducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
    
};

const RootReducers = combineReducers({
    auth: athRducer,




});

const persistedReducer = persistReducer(persistConfig, RootReducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});