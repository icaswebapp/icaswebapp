import React, {Component} from 'react';
import { ABOUT } from '../Constants/constants';
import {FirebaseAuthContext} from './FirebaseContext';

const protectedScreen = (Comp) => class ProtectedScreen extends Component{
    render() {
        return (
            <FirebaseAuthContext.Consumer>
                {
                    ({isUserSignedIn}) => {
                        if (isUserSignedIn) {
                            console.log('STATUS - > TRUE -> ',isUserSignedIn)
                            return (<Comp/>)
                        }else{
                         console.log('USER SIGNED IN -> FALSE',isUserSignedIn);
                         alert('YOU CANNOT ACCESS THE URL DIRECTLY. YOU SHOULD HAVE ADMIN RIGHTS/BW LOGGED IN.');
                         this.props.history.replace(ABOUT);
                         return null;
                        }
                    }
                }
            </FirebaseAuthContext.Consumer>
        );
    }
  };

export default protectedScreen;