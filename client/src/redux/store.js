import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userSlice.js'
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore.js';


const rootReducer = combineReducers({
    user: userReducer,
});

const persistConfig ={
    key:'root',
    storage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddelware)=>
    getDefaultMiddelware({serializableCheck:false}),
});

export const persistor = persistStore(store)
