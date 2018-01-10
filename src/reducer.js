// import { fromJS } from 'immutable'; 
import { combineReducers } from 'redux-immutable';
import loginReducer from './components/Forms/Login/state/reducer';
import requestReducer from './components/Forms/Request/state/reducer';

export default function createReducer(asyncReducers) { 
	return combineReducers({
		user: loginReducer,
		request: requestReducer,
		...asyncReducers,
	});
}