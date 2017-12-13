const initialState = {
    'handWrittenKey':'handWrittenVal'
};

export default (state, action) => {
    state = state || initialState;
   console.log('root reducer state ->',state);
    return state;
};

