import React,{useState} from 'react'
import protectedScreen from '../../Backend/Protector';
import firebase from '../../Backend/Firebase';
import NotesItem from './NotesItem';

const NotesView = (props) => {

    var docRef = firebase.getFirestore().collection("ACADEMIC NOTES").doc("URLS");
    const [notesCards, setnotesCards] = useState(null);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            setnotesCards( 
                Object.keys(doc.data()).map((key , index) => <NotesItem key={index} name={key} position={index}/>));
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    return (
        <div>
            <h1 className="f1 tc black underline fw9">NOTES</h1>
            {notesCards}
        </div>
    )
}

export default protectedScreen(NotesView);
