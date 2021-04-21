import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

let initialState = {
  initalized: false,
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initalized: true,
      }
    default:
      return state;
  }
}

export const setInitalizedSuccess = () => (
  {type: INITIALIZED_SUCCESS}
)

// thunk creator
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise])
  .then(() => {
    dispatch(setInitalizedSuccess())
  });
}

export default appReducer;