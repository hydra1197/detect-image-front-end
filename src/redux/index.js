import { combineReducers } from 'redux';
import detect from './Detect/reducer';

const rootReducer = combineReducers({
  detect,
});

export default rootReducer;
