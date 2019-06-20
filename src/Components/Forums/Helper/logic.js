import firebase from '../../../Backend/Firebase'

// GET A COLLECTION
async function getCollection(path) {
    const markers = [];
    await firebase.getFirestore().collection(path).get()
        .then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
                markers.push(doc.data());
            });
        })
    return markers
}

// GET A DOCUMENT
async function getDoc(path, callback) {
    await firebase.getFirestore().doc(path).get()
        .then(doc => { return doc })
}

export default { getCollection, getDoc }