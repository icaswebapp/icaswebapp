import React, { useState, useEffect } from 'react'
import protectedScreen from '../../Backend/Protector';
import firebase from '../../Backend/Firebase';
import NotesItem from './NotesItem';
import { NOTESREF } from '../../Constants/constants';
import Helper from '../Forums/Helper'

const NotesView = (props) => {

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const colRef = await Helper.getCollectionData(NOTESREF)
            // ...
            colRef.forEach(doc => {
                console.log(doc)
                setnotesCards(
                    Object.keys(doc).map((key, index) => <NotesItem key={index} name={key} position={index} url={doc.downloadURL}/>));
            })
        }
        fetchData();
    }, []);

    // var colRef = Helper.getCollection(NOTESREF)
    var docRef = firebase.getFirestore().collection(NOTESREF).doc("URLS");
    const [notesCards, setnotesCards] = useState(null);

    return (
        <div>
            <h1 className="f1 tc black underline fw9">NOTES</h1>
            {notesCards}
        </div>
    )
}

export default protectedScreen(NotesView);
