import React from 'react';
import {NavLink} from 'react-router-dom';
import { ABOUT, SIGN_IN, SIGN_UP } from '../../Constants/constants';

export default function SignedOutLinks() {
    return (
        <>
    <NavLink to={ABOUT} className="f6 link dib white dim mr3 mr4-ns">About</NavLink>
    <NavLink to={SIGN_IN} className="f6 link dib white dim mr3 mr4-ns">Sign In</NavLink>            
    <NavLink to={SIGN_UP} className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20">Sign Up</NavLink>
        </>
    )
}
