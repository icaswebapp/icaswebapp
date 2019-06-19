import React from 'react'
import firebase from '../../Backend/Firebase';


function ForumsItem({ object }) {
    const handleClick = (event) => {
        console.log(object);
        var collectionRef = firebase.getFirestore().collection("Posts");

        collectionRef.get().then(function (collection) {
            if (collection.exists) {

                console.log("Document data:", collection.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }

    return (
        <article className="mw8 center br2 ba b--light-blue bg-lightest-blue">
            <h1>Title: {object.content}</h1><br/>
            <h3>Author: user_{object.user_id}</h3><br/>
            <img src={object.image_url}></img>
        </article>
    )
}


export default ForumsItem;