import React from 'react';
import classes from './ProfileContainer.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import * as  axios from 'axios';
import { connect } from 'react-redux';
import {getUserProfile, setUserProfile, getStatus, updateStatus, savePhoto} from "../../redux/profile-reducer";
import Profile from './Profile';
import { Redirect, withRouter } from 'react-router-dom';
import { userAPI } from '../../api/api';
import WithAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = this.props.authorizedUserId;
      if(!userId) {
        this.props.history.push("/login")
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  
  render(){
    console.log(this.props.status)
    return (
      <div>
        <Profile {...this.props} 
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus} 
          savePhoto={this.props.savePhoto}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
  withRouter
)(ProfileContainer)