import { combineReducers } from "redux";
import startupReducer from "./StartupReducer";

const rootReducer = combineReducers({
    startup: startupReducer
})

export default rootReducer;
