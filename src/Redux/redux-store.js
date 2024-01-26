import {dialogReducer} from "./dialog-reducer";
import {followReducer} from "./follow-Reducer";
import {postReducer} from "./profile-reducer";
import {userReducer} from "./user-reducers";


const {legacy_createStore, combineReducers} = require("redux");

let reducers = combineReducers({
    user: postReducer,
    messageData: dialogReducer,
    follow: userReducer,
    listOfFollow: followReducer,

});

let store = legacy_createStore(reducers)

window.store = store

export default store
