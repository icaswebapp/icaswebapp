import firebase from '../../Backend/Firebase';

async function getCollection(collectionName) {
    const snapshot = await firebase.getFirestore().collection(collectionName).get()
    return snapshot.docs.map(doc => doc);
}

export default { getCollection }