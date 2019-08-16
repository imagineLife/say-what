import type { appProviderProps } from './flow';
import React from 'react'
import useLocalStorage from './CustomHooks/useLS'
const AppContext = React.createContext();
let { Provider, Consumer } = AppContext;

const AppProvider = (props: appProviderProps) => {

	const [loggedIn, setLoggedIn] = React.useState(false)
	const [ lsval, setLsval ] = useLocalStorage('localStorageAuthToken')
	

	return(
	  <Provider value={{loggedIn, token: lsval, setToken: setLsval}}>
	    {props.children}
	  </Provider>
	)
}

export {AppProvider, Consumer as AppConsumer, AppContext}