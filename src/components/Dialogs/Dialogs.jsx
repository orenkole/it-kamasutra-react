import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router';
import { AddMessageFormRedux } from './AddMessageForm';

const Dialogs = (props) => {

  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(dialogData => {
    return <DialogItem
      key={dialogData.id}
      name={dialogData.name}
      id={dialogData.id}
    />
  })

  let messagesElements = state.messages.map(dialogMessage =>
    <Message
      key={dialogMessage.id}
      message={dialogMessage.message}
    />
  )

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  if(!props.isAuth) {
    return <Redirect to={"/login"} />
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div>{ messagesElements }</div>
      </div>
      <AddMessageFormRedux
        onSubmit={addNewMessage}
      />
    </div>
  );
}

export default Dialogs;