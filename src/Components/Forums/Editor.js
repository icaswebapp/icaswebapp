import React, { useState } from 'react'
import Helper from './Helper'
import Firebase from '../../Backend/Firebase'
import Post from './Post';

export default ({ parent }) => {
    const [state, setstate] = useState({ parent: parent || null, title: null, content: null })

    function setTitle(title) {
        setstate({ ...state, title: title })
    }

    function setContent(content) {
        setstate({ ...state, content: content })
    }

    function submitPost() {
        // Firebase.getFirestore().collection("Entries").doc(Math.random(100000).toString()).set(
        //     new Post(this.state.title, this.state.content, Firebase.getCurrentUsername)
        // )
        console.log(Firebase.getCurrentUsername())
        return
    }

    return (
        <>
            <b>Title:</b><input type="text" onChange={(e) => { setTitle(e.target.value) }} /><br/>
            <b>Content:</b><input type="textarea" onChange={(e) => { setContent(e.target.value) }} /><br/>
            <button onClick={submitPost()}>Submit</button>
        </>
    )
}