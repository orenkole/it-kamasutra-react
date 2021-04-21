import React from 'react';
import styles from './users.module.css';
import userPhoto from './../../assets/images/default-avatar.jpg';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../api/api';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
  let pages = []
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map(page => {
          console.log("PAGE: ", page)
          console.log("props.currentPage: ", props.currentPage)
          return <span
            className={props.currentPage === page && styles.selectedPage}
            onClick={(e) => {props.onPageChanged(page)}}
          >{page}</span>
        })}
      </div>
      <button onClick={props.getUsers}>Get users</button>
      {
        props.users.map(user => <div key={user.id}>
          <span>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={user.photos.small ? user.photos.small : userPhoto}
                  className={styles.userPhoto}
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {user.followed
              ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                  props.unfollow(user.id)
                  // props.toggleFollowingProgress(true, user.id);
                  // userAPI.unfollow(true, user.id)
                  // .then(
                  //   response => {
                  //     if(response.data.resultCode === 0) {
                  //       props.unfollow(user.id)
                  //     }
                  //     props.toggleFollowingProgress(false, user.id);
                  //   }
                  // );
                }}>Unfollow</button>
              : <button disabled={props.followingInProgress.some(id => id === user.id)}  onClick={() => {
                  props.follow(user.id)
                  // userAPI.follow(true, user.id)
                  // .then(
                  //   response => {
                  //     if(response.data.resultCode === 0) {
                  //       props.follow(user.id);
                  //     }
                  //     props.toggleFollowingProgress(false, user.id);
                  //   }
                  // );
                }}>Follow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  );
}

export default Users;
