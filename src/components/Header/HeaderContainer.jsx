import React, { Component } from 'react'
import Header from './Header'
import * as axios from 'axios';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends Component {

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => (
  {isAuth: state.auth.isAuth, login: state.auth.login}
)
export default connect(mapStateToProps,
  {
    logout,
  }
)(HeaderContainer);
