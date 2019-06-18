import React from 'react';
import {NavLink , withRouter} from 'react-router-dom';
import { FEED, FORUM, NOTES, SIGN_IN, HOME, NOTESUPLOAD } from '../../Constants/constants';
import firebase from '../../Backend/Firebase';

const SignedInLinks = () => {
    async function signOut(){
        try{
            console.log('TRYING TO LOG OUT.');
            await firebase.logout();
            await console.log('LOGGED OUT SUCCESSFULLY.')
        }catch(error){
            alert(error);
        }
    }


    return (
        <>
    <NavLink to={HOME} className="f6 link dib white dim mr3 mr4-ns">Home</NavLink>
    <NavLink to={FEED} className="f6 link dib white dim mr3 mr4-ns">Feed</NavLink>
    <NavLink to={FORUM} className="f6 link dib white dim mr3 mr4-ns">Forums</NavLink>     
    <NavLink to={NOTES} className="f6 link dib white dim mr3 mr4-ns">Notes</NavLink>   
    <NavLink to={NOTESUPLOAD} className="f6 link dib white dim mr3 mr4-ns">Upload</NavLink>                                  
    <NavLink to={SIGN_IN} onClick={signOut} className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20">Sign Out</NavLink>
        </>
    )

}

export default withRouter(SignedInLinks);


