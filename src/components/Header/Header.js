import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src='https://www.freelogodesign.org/file/app/client/thumb/0c7243cd-eec9-4acd-8a31-15138c3a28c8_200x200.png?1589734502634' alt="logo"/>
      <div className={classes.loginBlock}>
        {props.isAuth
          ? <div>
              {props.login} - <button onClick={props.logout}>Logout</button>
            </div>
          : <NavLink to={`/login`}>Login</NavLink>
        }
      </div>
    </header>
  );
}

export default Header;