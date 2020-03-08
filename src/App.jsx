import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import store from './redux/reduxStore';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import style from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login'
import ProfileContainer from './components/Profile/ProfileContainer';

import {initialiseThunk} from './redux/appReducer';
import Preloader from './components/common/preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initialiseThunk()
  }

  render() {
    if(!this.props.initialised) {
      return <Preloader />
    }
    return ( 
      <div className={ style.wrapper }>
        <HeaderContainer />
        <Navbar />
        <main className={ style.wrapperContent }>
            <Route exact path = '/' render={ () => <ProfileContainer  /> } />
            <Route path = '/profile/:userId?' render={ () => <ProfileContainer  /> } />
            <Route path = '/dialogs' render={ () => <DialogsContainer /> } />
            <Route path = '/login' render = {() => <Login /> } />
            
            <Route path = '/users' render = { () => <UsersContainer/> } />
            <Route path = '/music' render ={ () => <Music /> } />
            <Route path = '/news' render ={ () => <News /> } />
            <Route path = '/settings' render ={ () => <Settings /> } />
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
  return  <BrowserRouter>
  <Provider store = {store}>
      <AppContainer />
  </Provider>
</BrowserRouter>
}

export default MainApp;