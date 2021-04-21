import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field 
          component={Textarea}
          name={"newPostText"}
          validate={[required, maxLength10]}
          placeholder="Post message"
        />
      </div>
      <div>
        <button type="submit">Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {

  let postsElements = props.posts.map(postData =>
    <Post
      message={postData.message}
      likesCount={postData.likesCount}
    />
  )

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className="classes.postsBlock">
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={classes.posts}>
        { postsElements }
      </div>
    </div>
  );
}

export default MyPosts;