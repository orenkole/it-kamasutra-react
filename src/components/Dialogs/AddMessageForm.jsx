import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../Common/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50);

const addMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength50]}
          name={"newMessageBody"}
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export const AddMessageFormRedux = reduxForm({form: "dialogsAddMessageForm"})(addMessageForm)