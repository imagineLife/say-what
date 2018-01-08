import {LOGIN} from './constants';
export const loginAction = (obj, dispatch) => {
    let encodedStr = btoa(`${obj.username}:${obj.password}`);
    fetch(`http://localhost:8080/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + encodedStr
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
        type: LOGIN,
        payload: obj
    };
    dispatch(dispatchObject);
}