import React, { useState } from 'react';
import protectedScreen from '../../Backend/Protector';
import firebase from '../../Backend/Firebase';
var ForumsItem = require('./ForumsItem').default

const Forums = (props) => {
    const [forumsCards, setforumsCards] = useState(null);

    // get all the documents in the collection
    async function getCollection() {
        const markers = [];
        await firebase.getFirestore().collection('Posts').get()
            .then(querySnapshot => {
                querySnapshot.docs.forEach(doc => {
                    markers.push(doc.data());
                });
            });
        return markers;
    }

    getCollection().then(function (collection) {
        setforumsCards(
            collection.map((forumObject, index) => {
                return <ForumsItem 
                    key={index} 
                    object={forumObject} 
                    position={index}
                />
            })
        )

        console.log(collection)
        collection.forEach(doc => {
            return doc.map
        })
    }).catch(function (error) {
        console.log("Error getting collection:", error);
    });

    return (
        <div>
            <h1 className="f1 tc black underline fw9">FORUMS</h1>
            {forumsCards}
        </div>
    )
}

export default protectedScreen(Forums);

