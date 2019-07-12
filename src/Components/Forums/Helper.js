const firebase = require('../../Backend/Firebase')

async function getCollection(collectionName) {
    const snapshot = await firebase.getFirestore().collection(collectionName).get()
    return snapshot.docs.map(doc => doc);
}

module.exports = { getCollection }