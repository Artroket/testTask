import { createStore, combineReducers } from "redux";
import clientsReducer from "./clients-reducer";

let reducers = combineReducers({
    clients: clientsReducer
});


let store = createStore(reducers);


export default store;