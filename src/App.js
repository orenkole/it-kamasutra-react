import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <div className="app-wrapper-content" >
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route path="/profile/:userId?" render= {() => (
            <React.Suspense
              fallback={<div>Loading...</div>}
            >
              <ProfileContainer />
            </React.Suspense>
          )} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // connect in redux-store.js
  initialized: state.app.initalized,
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);

export const SamuraiJSApp = () => {
  return( 
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
  )
}