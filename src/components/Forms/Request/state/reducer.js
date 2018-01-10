import {fromJS} from 'immutable';
import {REQUEST} from './constants';
const initialState = fromJS({});

const setUserSubmitted = (state, action) => {
	
	switch(action.type) {
		
		case REQUEST:
			/*
				for future use...
				THIS is where transformations of
				data that is going into the state would go...
					IE doing math on return content etc.
			*/
			return true;
	
		default: 
			return state;
	}
}

const requestReducer = (state = initialState, action) => {
	return {
		userSubmittedRequest: setUserSubmitted(state, action)
	};
};

export default requestReducer;