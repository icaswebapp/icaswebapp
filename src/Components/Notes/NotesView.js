import React,{useState} from 'react'
import protectedScreen from '../../Backend/Protector';
import firebase from '../../Backend/Firebase';

const NotesView = (props) => {

    var docRef = firebase.getFirestore().collection("ACADEMIC NOTES").doc("URLS");
    const [notesCards, setnotesCards] = useState(null);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            console.log('KEYS' , Object.keys(doc.data()));
            setnotesCards( Object.keys(doc.data()).map((key) => <p className="f1 tc f6 fw9 pointer">{key}</p>));
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
