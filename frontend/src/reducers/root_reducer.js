import { combineReducers } from 'redux';
import session from './session_reducer';
import sessionErrors from './errors_reducer'

const RootReducer = combineReducers({
    session,
    sessionErrors
});

export default RootReducer;