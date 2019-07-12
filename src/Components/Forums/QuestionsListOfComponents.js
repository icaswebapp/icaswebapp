import React, { memo } from 'react'
const QuestionsListOfComponents = memo(function QuestionsListOfComponents({ list }) {
    return (
        <>
            {list.length > 0 ? (<ul>
                {list.map(question => (
                    <li key={Math.random(100000)}>
                        <div className="question" key={Math.random(100000)}>
                            {question.question} <button>Answer this question !</button>
                        </div>
                        <ul>
                            {question.answers.map(answer => <li key={Math.random(100000)}>{answer}</li>)}
                        </ul>
                    </li>
                ))}
            </ul>) : (null)}
        </>
    )
})

export default QuestionsListOfComponents