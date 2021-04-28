import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/default-avatar.jpg';
import s from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
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
        <ProfileStatusWithHooks 
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
}

export default ProfileInfo;
