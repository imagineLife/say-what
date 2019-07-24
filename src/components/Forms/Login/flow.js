export type state = {
  username: string,
  password: string,
  loading: boolean
}

//loading? will make loading optional, not-needed to be defined in the 'constructor'


export type loginObjType = {
  username: string,
  password: string
}

//void because this fn doesnt explicitly return anything
export type Props = {
  myRunLoginKey: (loginObjType)=> void, 
  toggleForm: ()=> void
}

export type EventType = SyntheticInputEvent<HTMLInputElement>;

//void because this fn doesnt explicitly return anything
export type dispatchType = {
  myRunLoginKey: (any) => void 
}

export type loginActionObjType = {
	username: string,
	password: string
}

export type dispatchObjectType = {
	type: string,
	payload: {
		aythToken: string,
		email: string,
		firstName: string,
		lastName: string,
		password: string,
		requests?: Array<string>,
		username: string,
		_id: string
	}
}