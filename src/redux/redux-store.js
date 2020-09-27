import { createStore, combineReducers } from "redux";
import clientsReducer from "./clients-reducer";
import pathReducer from "./path-reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const reducers = combineReducers({
    clients: clientsReducer,
    path: pathReducer,
});

const persistConfig = {
    key: 'root',
    whiteList: ['clients'],
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)


export const store = createStore(persistedReducer);
 

export const persistor = persistStore(store);