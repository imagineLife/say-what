import {fromJS} from 'immutable';
import {LOGIN} from './constants';
const initialState = fromJS({});

const setAuthToken = (state, action: actionType) => {
	
	switch(action.type) {		
		case LOGIN:
			/*
				for future use...
				THIS is where transformations of
				data that is going into the state goes
			*/
			return action.payload.authToken;
		
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