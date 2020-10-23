import {fromJS} from 'immutable';
import {LOGIN} from './constants';
const initialState = fromJS({});

const setAuthToken = (state, action: actionType) => {

	switch(action.type) {		
		case LOGIN:
			return {...state, authToken: action.payload.authToken, loggedIn: true};
		default: 
			return state;
	}
}

//state: stateType = initialState
const loginReducer = (state = initialState, action: actionType) => {
	return {
		authToken: setAuthToken(state, action)
	};
};

export default loginReducer;