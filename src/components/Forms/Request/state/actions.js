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
    .then(() => dispatch( { type:REQUEST, payload: true } ))
    .catch(err => {
        const {code} = err;
        if (code === 401) {
          console.log(code);
        }
    })
}