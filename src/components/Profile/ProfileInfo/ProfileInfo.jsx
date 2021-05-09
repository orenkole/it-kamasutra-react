import React, { useState } from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/default-avatar.jpg';
import s from "./ProfileInfo.module.css";
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = (props) => {

  const [editMode, setEditMode] = useState(false);

  const {profile, isOwner, saveProfile} = props;
  if(!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    const promise = saveProfile(formData)
    promise.then(() => {setEditMode(false);})    
  }

  const profileForFormInitialValues = {
    FullName: profile.fullName,
    LookingForAJob: profile.lookingForAJob,
    LookingForAJobDescription: profile.lookingForAJobDescription,
    AboutMe: profile.aboutMe,
  }
  return (
    <div>
      {/* <div>
        <img src='https://cdn1.sportngin.com/attachments/photo/24b1-136159405/IMAustralia_PortMacquarie_01-Destination.jpg' />
      </div> */}
      <div className="s.descriptionBlock">
        <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt=""/>
        {props.isOwner && 
          <input type={"file"}
            onChange={onMainPhotoSelected}
          />
        }
        {editMode
          ? <ProfileDataForm
              initialValues={profileForFormInitialValues}
              profile={profile} 
              isOwner={isOwner}
              onSubmit={onSubmit}
            />
          : <ProfileData
              profile={profile} 
              isOwner={isOwner} 
              goToEditMode={() => {setEditMode(true)}}
            />
        }
        <ProfileStatusWithHooks 
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
}

const Contact = ({contactTitle, contactValue}) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => (
  <div>
    {isOwner && <button onClick={goToEditMode}>edit</button>}
    <div>
      <b>Full name:</b> {profile.fullName}
    </div>
    <div>
      <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>My professinal skills:</b> {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>About me:</b> {profile.aboutMe}
    </div>
    <div>
      <b>Contacts:</b> {Object.keys(profile.contacts).map(key => (
        <Contact
          key={key}
          contactTitle={key}
          contactValue={profile.contacts[key]}
        />))}
    </div>
  </div>        
)

export default ProfileInfo;
