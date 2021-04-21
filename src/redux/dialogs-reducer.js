const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    messages: [
      {id: 1, message: 'How is your it-kamasutra'},
      {id: 2, message: 'Hi'},
      {id: 3, message: 'Yo'},
      {id: 4, message: 'Yo'},
    ],
    dialogs: [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Andrew'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Sasha'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
  // let stateCopy = {...state};
  // stateCopy.messages = [...state.messages];
  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: body}]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export const updateNewMessageBodyCreator = (body) => (
  {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
)

export default dialogsReducer;