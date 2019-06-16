import React from 'react';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import {withRouter} from 'react-router-dom';
import {FirebaseAuthContext} from '../../Backend/FirebaseContext';


const Navbar = (props) => {
  return (
    <FirebaseAuthContext.Consumer>
    {({isUserSignedIn,authStatusReported }) => {
      return(
        <nav className="flex justify-end bb b--white-10 bg-black ">
          <div className="flex-grow pa3 flex items-center">
            {isUserSignedIn? <SignedInLinks/> : <SignedOutLinks/>}
          </div>
        </nav>)
    }
    }
    </FirebaseAuthContext.Consumer> 
  )
}

export default withRouter(Navbar);
