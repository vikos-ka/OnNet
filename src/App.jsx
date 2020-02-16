import React from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom'

const App = (props) => {
return ( 

  <BrowserRouter>
    <div className={ style.wrapper }>
      <Header />
      <Navbar />
      <main className={ style.wrapperContent }>
          <Route exact path = '/' render={() => <Profile posts = {props.posts}/>} />
          <Route path = '/profile' render={() => <Profile posts = {props.posts} />} />
          <Route path = '/dialogs' render={() => <Dialogs dialogs = {props.dialogs} messages = {props.messages} />} />
          <Route path = '/music' render ={ () => <Music />} />
          <Route path = '/news' render ={ () => <News />} />
          <Route path = '/settings' render ={() => <Settings />} />
      </main> 
    </div> 
  </BrowserRouter> 
);
} 

export default App;