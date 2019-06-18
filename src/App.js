import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'tachyons';
import Navbar from './Components/Navbar/Navbar';
import { ABOUT, HOME, SIGN_IN, SIGN_UP, NOTES, FEED, FORUM, NOTESUPLOAD } from './Constants/constants';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import firebase from './Backend/Firebase';
import Feed from './Components/Feed/Feed';
import Forums from './Components/Forums/Forums';
import NotesView from './Components/Notes/NotesView';
import NotesUpload from './Components/Notes/NotesUpload';


function App() {

  
  
  return firebase.isInitialized ?  (
    <Router>
      <div className="app">
        <header>
            <Navbar />
        </header> 
        <Switch>
          <Route exact path={ABOUT}       component={About} />
          <Route exact path={SIGN_IN}     component={SignIn} />
          <Route exact path={SIGN_UP}     component={SignUp} />
          <Route exact path={HOME}        component={Home} />
          <Route exact path={NOTESUPLOAD} component={NotesUpload}/>
          <Route exact path={FEED}        component={Feed} />
          <Route exact path={FORUM}       component={Forums} />
          <Route exact path={NOTES}       component={NotesView}/>
        </Switch>
      </div>
   </Router>
  ) : (<div className="loader">LOADING....</div>)
}


export default App;
