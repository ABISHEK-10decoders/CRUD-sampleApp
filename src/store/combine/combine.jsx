import { combineReducers } from "redux";
import Reducers from "../reducers/store/ReducersAction"

const combine = combineReducers({
    users: Reducers
});
export default combine;