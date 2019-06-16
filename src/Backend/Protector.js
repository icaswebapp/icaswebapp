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
                            return <Comp/>
                        }
                        alert('ACCESS DENIED. LOGIN OR REGISTER FIRST.');
                        this.props.history.replace(ABOUT);
                        return null;
                    }
                }
            </FirebaseAuthContext.Consumer>
        );
    }
  };

export default protectedScreen;