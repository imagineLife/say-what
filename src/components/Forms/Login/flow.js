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

export type Props = {
  myRunLoginKey: (loginObjType)=> void, //void because this fn doesnt explicitly return anything
  toggleForm: ()=> void
}

export type EventType = SyntheticInputEvent<HTMLInputElement>;

