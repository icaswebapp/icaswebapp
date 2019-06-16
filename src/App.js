import React , {useState , useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'tachyons';
import Navbar from './Components/Navbar/Navbar';
import { ABOUT, HOME, SIGN_IN, SIGN_UP, NOTES, FEED, FORUM } from './Constants/constants';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import firebase from './Backend/Firebase';
import Notes from './Components/Notes/Notes';
import Feed from './Components/Feed/Feed';
import Forums from './Components/Forums/Forums';

const INITIAL_STATE = {
  authUser : null
}


function App() {
  const [authUser, setAuthUser] = useState(INITIAL_STATE);

  useEffect(() => {
    return () => {
      console.log('USER MOUNT/UPDATE APP 1',authUser)
      setAuthUser(firebase.getCurrentUser);
      console.log('USER MOUNT/UPDATE APP 2:',authUser);
    };
  },[authUser , setAuthUser])
  return firebase.isInitialized ?  (
    <Router>
        <header>
            <Navbar authUser={authUser}/>
        </header> 
        <Switch>
          <Route exact path={ABOUT}   component={About} />
          <Route exact path={SIGN_IN} component={SignIn} />
          <Route exact path={SIGN_UP} component={SignUp} />
          <Route exact path={HOME}    component={Home}   authUser={authUser} />
          <Route exact path={NOTES}   component={Notes}  authUser={authUser} />
          <Route exact path={FEED}    component={Feed}   authUser={authUser}/>
          <Route exact path={FORUM}   component={Forums} authUser={authUser}/>
        </Switch>
   </Router>
   ) : (<div className='loader'></div>)
}


export default App;
