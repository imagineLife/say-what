import {REQUEST} from './constants';
export const requestAction = (obj, dispatch) => {

    const authString = localStorage.getItem('localStorageAuthToken') || '';
    
    fetch(`${window.backendPath}/api/requests`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authString
        },
        body: JSON.stringify(obj)
    })
    .then(() => dispatch( { type:REQUEST, payload: true } ))
    .catch(err => {
        const {code} = err;
        if (code === 401) {
          console.log(code);
        }
    })
}