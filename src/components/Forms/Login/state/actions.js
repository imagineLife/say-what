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

//does NOT need export, 
//as only using in this file
const saveTokenAction = (obj, dispatch) => {
    let dispatchObject = {
        type: LOGIN,
        payload: obj
    };
    console.log('dispatch object INSIDE saveTokenAction is =>',dispatchObject);
    dispatch(dispatchObject);
}