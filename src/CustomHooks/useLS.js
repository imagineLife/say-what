import React from 'react';

//a CUSTOM HOOK!
const useLocalStorage = (localStorageKey: string) => {

  //NOTE: includes a wrapper fn to work with useState,
  // invoked ONCE  to get initial value. This changes localStorage performance for the better
  const initialValue = () => {
    let lsVal = window.localStorage.getItem(localStorageKey)
    console.log('lsVal')
    console.log(lsVal)
    
    //GET item from localStorage
    return lsVal;
  }

  //get/set for EXISTING todos
  //tried initialValue: () => ?string)
  const [storageval, setStorageval] = React.useState(initialValue)

  /*
    WRITE val to localstorage
    NOTE: arr @ end means ONLY run if 'todos' has changed
  */
  React.useEffect(() => {
    if(storageval !== null){
      window.localStorage.setItem(localStorageKey, JSON.stringify(storageval));
    }
  }, [storageval])

  return [storageval, setStorageval]
}

export default useLocalStorage