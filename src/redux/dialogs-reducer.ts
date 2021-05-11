const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

type DialogType = {
  id: number, name: string,
}

type MessageType = {
  id: number, message: string,
}

let initialState = {
    messages: [
      {id: 1, message: 'How is your it-kamasutra'},
      {id: 2, message: 'Hi'},
      {id: 3, message: 'Yo'},
      {id: 4, message: 'Yo'},
    ] as Array<MessageType>,
    dialogs: [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Andrew'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Sasha'},
    ] as Array<DialogType>
}

export type initialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): initialStateType => {
  // let stateCopy = {...state};
  // stateCopy.messages = [...state.messages];
  switch(action.type) {
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

type sendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})

export const updateNewMessageBodyCreator = (body: any) => (
  {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
)

export default dialogsReducer;