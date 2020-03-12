import React, { Suspense } from 'react';
import {HashRouter, Route, withRouter, Switch, Redirect} from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { compose } from 'redux';
import store from './redux/reduxStore';

import style from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login'
import ProfileContainer from './components/Profile/ProfileContainer';

import {initialiseThunk} from './redux/appReducer';
import Preloader from './components/common/preloader';

const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy( () => import('./components/Users/UsersContainer'));




class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    debugger;
    console.error(promiseRejectionEvent);
  }
  componentDidMount() {
    this.props.initialiseThunk();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  render() {
    if(!this.props.initialised) {
      return <div className = {style.preloaderWrapper}><Preloader /></div>
    }
    return ( 
      <div className={ style.wrapper }>
        <HeaderContainer />
        <Navbar />
        <main className={ style.wrapperContent }>
          <Switch>
            <Route exact path = '/' render={ () => {return <Redirect to='/profile' />}} />
            <Route path = '/profile/:userId?' render={ () => 
              <ProfileContainer />} />
            <Route path = '/dialogs' render={ () => {return <Suspense fallback = {Preloader}>
              <DialogsContainer />
            </Suspense> }} />
            <Route path = '/login' render = {() => <Login /> } />
            
            <Route path = '/users' render = { () => {return <Suspense fallback = {Preloader}>
              <UsersContainer />
            </Suspense> } } />
            </Switch>
        </main> 
      </div> 
    );
  }
} 
const mapStateToProps = (state) => {
return {
  initialised: state.app.initialised}
}
const AppContainer =  compose(

  withRouter,
  connect(mapStateToProps, {initialiseThunk}))
  (App);


const MainApp = (props) => {
  return  <HashRouter basename={process.env.PUBLIC_URL}>
  <Provider store = {store}>
      <AppContainer />
  </Provider>
</HashRouter>
}

export default MainApp;