export type State = {
  username: string,
  password: string
}

export type loginObjType = {
  username: string,
  password: string
}

export type Props = {
  myRunLoginKey: (loginObjType)=> void, //void because this fn doesnt explicitly return anything
  toggleForm: ()=> void
}