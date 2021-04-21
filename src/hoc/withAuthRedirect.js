import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const mapStateToPropsForRedirect = (state) => (
    {
        isAuth: state.auth.isAuth,
    }
)

const WithAuthRedirect = (Component) => {
    const AuthRedirectComponent = (props) => {
        if(!props.isAuth) {
            return <Redirect to={"/login"}/>
        }
        return <Component {...props} />
    }
      
    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)
    return ConnectedAuthRedirectComponent;
}

export default WithAuthRedirect
