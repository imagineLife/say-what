import {fromJS} from 'immutable';
import {REQUEST} from './constants';
const initialState = fromJS({});

const setAuthToken = (state, action) => {
	console.log('in setAuthToken reducer, state is...',state);
	console.log('setAuthToken Reducer  action.type',action.type);
	switch(action.type) {
		
		case REQUEST:
			/*
				for future use...
				THIS is where transformations of
				data that is going into the state would go...
					IE doing math on return content etc.
			*/
			console.log('inside REQUEST setAuthToken switch Login reducer, authToken is',action.payload.authToken);
			return action.payload.authToken;
		
		default: 
			return state;
	}
}

const requestReducer = (state = initialState, action) => {
	return {
		authToken: setAuthToken(state, action)
	};
};

export default requestReducer;