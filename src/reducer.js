const initialState = {
    key:'val'
};

export default (state, action) => {
    state = state || initialState;
   
    return state;
};

