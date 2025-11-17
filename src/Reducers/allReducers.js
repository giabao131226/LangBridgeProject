import { combineReducers } from "redux";
import account from "./account";
import changeLogin from "./checkLogin";
export const allReducers = combineReducers({
    account,
    changeLogin
})