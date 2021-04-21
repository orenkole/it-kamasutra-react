import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      {/* <div>
        <img src='https://cdn1.sportngin.com/attachments/photo/24b1-136159405/IMAustralia_PortMacquarie_01-Destination.jpg' />
      </div> */}
      <div className="s.descriptionBlock">
        <img src={props.profile.photos.large} alt=""/>
        <ProfileStatus 
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
}

export default ProfileInfo;
