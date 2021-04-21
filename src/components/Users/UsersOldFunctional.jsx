import React from 'react';
import * as  axios from 'axios';
import userPhoto from './../../assets/images/default-avatar.jpg';

let Users = (props) => {
  let getUsers = () => {
    console.log(props.users);
    if(props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
        response => {
          console.dir(response)
          debugger;
          props.setUsers(response.data.items)
        }
      );
    }
  }
  
  return <div>
    <button onClick={getUsers}>Get users</button>
    {
      props.users.map(user => <div key={user.id}>
        <span>
          <div>
            <img src={user.photos.small ? user.photos.small : userPhoto} alt="" />
          </div>
          <div>
            {user.followed
              ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
              : <button onClick={() => {props.follow(user.id)}}>Follow</button>
            }
          </div>
        </span>
        <span>
          <smap>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </smap>
          <smap>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </smap>
        </span>
      </div>)
    }
  </div>
}

export default Users;