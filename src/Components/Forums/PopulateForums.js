const Helper = require('./Helper')
const Question = require('./Question')

async function populateForums(callback) {
    let QuestionsList = []

    const collection = await Helper.getCollection('Entries')
    collection.forEach(docRef => {
        let doc = docRef.data()
        // FIND A QUESTION
        if (!doc.Parent) {
            let questionTemp = new Question(doc.Title)
            collection.forEach(docRef2 => {
                let doc2 = docRef2.data()
                // FIND ALL THE ANSWERS FOR THAT QUESTION AND APPEND THEM TO THE COMPONENT
                if (doc2.Parent == docRef.ref.path) {
                    questionTemp.addAnswer(doc2.Title)
                }
            })
            QuestionsList.push(questionTemp.getComponent())
        }
    })
    if(callback) callback(QuestionsList)
    return QuestionsList
}

module.exports = populateForums
