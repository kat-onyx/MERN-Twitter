import { combineReducers } from 'redux';
import session from './session_reducer';
import session from './errors_reducer'

const RootReducer = combineReducers({
    session
});

export default RootReducer;