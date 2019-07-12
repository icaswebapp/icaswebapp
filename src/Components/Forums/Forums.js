import React, { useState, useEffect } from 'react'
import protectedScreen from '../../Backend/Protector';
import Helper from './Helper'
import Question from './Question'
import Editor from './Editor'
import QuestionsListOfComponents from './QuestionsListOfComponents'
import populateForums from './PopulateForums'

const ForumsView = (props) => {

    const [data, setData] = useState(null);

    useEffect(async () => {
        setData(await populateForums(function (list) {
            console.log("Success:", list)
        }));
    }, []);

    return (
        <div id="get">
            <h1 className="f1 tc black underline fw9">FORUMS</h1><br />
            {data ? <QuestionsListOfComponents list={data} /> : <b>Loading...</b>}
            <br />
            <Editor />
        </div>
    )

}

export default protectedScreen(ForumsView);
