import React, { useState, useEffect } from 'react'
import protectedScreen from '../../Backend/Protector';
import Helper from './Helper'
import Question from './Question'
import Editor from './Editor'
import QuestionsList from './QuestionsList'

const ForumsView = (props) => {
    var QuestionsList = []
    var QuestionListOfComponents = []

    const [state, setstate] = useState({ flag: false, data: null })

    // GET FIREBASE REFERENCE
    Helper.getCollection('Entries')

        // GET ALL QUESTIONS
        .then(collection => {
            collection.forEach(docRef => {
                let doc = docRef.data()
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
            return QuestionsList
        })
        .then(QuestionsList => {
            setstate({ flag: true, data: QuestionsList })
        })

    // DEBUG
    // HARDCODED AND OVERRIDDEN SAMPLE QUESTION LIST
    if (state.flag) {
        let PermanentQuestionsList = state.data
        var QuestionListOfComponents = () => (
            <ul>
                {PermanentQuestionsList.map(question => (
                    <li key={Math.random(100000)}>
                        <div className="question" key={Math.random(100000)}>
                            {question.question} <button>Answer this question !</button>
                        </div>
                        <ul>
                            {question.answers.map(answer => <li key={Math.random(100000)}>{answer}</li>)}
                        </ul>
                    </li>
                ))}
            </ul>
        )
    }

    // DEBUG END


    return (
        <div id="get">
            <h1 className="f1 tc black underline fw9">FORUMS</h1><br />
            {state.flag ? "true" : "false"}
            {state.flag ? (<QuestionListOfComponents />) : (<h1>Loading...</h1>)}
            <Editor />
        </div>
    )

}

export default protectedScreen(ForumsView);
