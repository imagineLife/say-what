import {REQUEST} from './constants';
export const requestAction = (obj, dispatch) => {
    fetch(`${window.backendPath}/api/requests`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('localStorageAuthToken')
        },
        body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(res => saveTokenAction(res,dispatch))
    .catch(err => {
        const {code} = err;
        if (code === 401) {
          console.log(code);
        }
    })
}

const saveTokenAction = (obj, dispatch) => {

    // saving to LOCAL storage in order to PERSIST across sessions
    localStorage.setItem('localStorageAuthToken', obj.authToken);

    let dispatchObject = {
        type: REQUEST,
        payload: obj
    };
    console.log('dispatch object INSIDE saveTokenAction is =>',dispatchObject);
    dispatch(dispatchObject);
}