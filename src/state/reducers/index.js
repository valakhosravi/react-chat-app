import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

const reducers = combineReducers({
    selectedContacts: contactReducer
});

export default reducers;