import React from 'react';
import firebase from '../../Backend/Firebase';

function NotesItem({name}) {
    const handleClick = (event) => {
        console.log(name);
        var docRef = firebase.getFirestore().collection("ACADEMIC NOTES").doc("URLS");

        docRef.get().then(function(doc) {
            if (doc.exists) {       

                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
            }

    return (
                <article className="mw8 center br2 ba b--light-blue bg-lightest-blue">
                    <div className="dt-ns dt--fixed-ns w-100">
                    <div className="pa3 pa4-ns dtc-ns v-mid">
                        <div>
                        <h2 className="fw4 blue mt0 mb3">{name}</h2>
                        </div>
                    </div>
                    <div className="pa3 pa4-ns dtc-ns v-mid">
                        <p className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2 pointer" onClick={handleClick}>DOWNLOAD</p>
                    </div>
                    </div>
                </article>
                )
}


export default NotesItem;

