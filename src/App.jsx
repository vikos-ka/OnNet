import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'
import {Route} from 'react-router-dom'

const App = (props) => {
return ( 
    <div className={ style.wrapper }>
      <Header />
      <Navbar />
      <main className={ style.wrapperContent }>
          <Route exact path = '/' render={() => <Profile store = {props.store} />} />
          <Route path = '/profile' render={() => <Profile store = {props.store} />} />
          <Route path = '/dialogs' render={() => <DialogsContainer store = {props.store} />} />
          
          <Route path = '/users' render = { () => <UsersContainer store = {props.store} />} />
          <Route path = '/music' render ={ () => <Music />} />
          <Route path = '/news' render ={ () => <News />} />
          <Route path = '/settings' render ={() => <Settings />} />
      </main> 
    </div> 
);
} 

export default App;

//<Route path = '/friends' render = {() => <Friends friends = {props.store} />} />