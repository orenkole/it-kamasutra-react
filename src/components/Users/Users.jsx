import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

  let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
  let pages = []
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <Paginator 
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      <button onClick={props.getUsers}>Get users</button>
      {
        users.map(user => (
          <User 
            user={user}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))
      }
    </div>
  );
}

export default Users;
