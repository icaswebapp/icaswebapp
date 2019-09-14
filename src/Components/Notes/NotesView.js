import React, { useState, useEffect } from 'react'
import protectedScreen from '../../Backend/Protector';
import NotesItem from './NotesItem';
import { NOTESREF } from '../../Constants/constants';
import Helper from '../Forums/Helper'

const NotesView = (props) => {

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const colRef = await Helper.getCollectionData(NOTESREF)
            // ...
            console.log(colRef)
            setnotesCards(
                colRef.map((doc, key) => <NotesItem key={key} name={doc.fileName} position={doc.index} url={doc.downloadURL} />)
            );
        }
        fetchData();
    }, []);
    const [notesCards, setnotesCards] = useState(null);

    return (
        <div>
            <h1 className="f1 tc black underline fw9">NOTES</h1>
            {notesCards}
        </div>
    )
}

export default protectedScreen(NotesView);
