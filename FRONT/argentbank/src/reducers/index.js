

import {combineReducers} from "redux";
import {userReducer} from "./user.reducer";
import {editFormReducer} from "./editform.reducer";


export default combineReducers({
userReducer,
editFormReducer
});
