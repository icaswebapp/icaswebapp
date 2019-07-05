import React,{useState} from 'react'
import protectedScreen from '../../Backend/Protector';
import firebase from '../../Backend/Firebase';

const ForumsView = (props) => {

    return (
        <div>
            <h1 className="f1 tc black underline fw9">FORUMS</h1>
        </div>
    )
}

export default protectedScreen(ForumsView);
