import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

export type InitialStateType = {
  initialized: boolean,
}

let initialState = {
  initialized: false
}

const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch(action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;
  }
}

type InitializeSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

export const setinitializedSuccess = (): InitializeSuccessActionType => (
  {type: INITIALIZED_SUCCESS}
)

// thunk creator
export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise])
  .then(() => {
    dispatch(setinitializedSuccess())
  });
}

export default appReducer;