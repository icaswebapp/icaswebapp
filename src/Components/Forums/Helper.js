const firebase = require('../../Backend/Firebase')

async function getCollection(collectionName) {
    const snapshot = await firebase.getFirestore().collection(collectionName).get()
    return snapshot.docs.map(doc => doc);
}

async function getCollectionData(collectionName) {
    const snapshot = await firebase.getFirestore().collection(collectionName).get()
    return snapshot.docs.map(doc => doc.data());
}

module.exports = { getCollection, getCollectionData }