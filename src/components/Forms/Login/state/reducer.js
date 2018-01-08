import {fromJS} from 'immutable';
import {LOGIN} from './constants';
const initialState = fromJS({});

const setAuthToken = (state, action) => {
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

const loginReducer = (state = initialState, action) => {
	return {
		authToken: setAuthToken(state, action)
	};
};

export default loginReducer;