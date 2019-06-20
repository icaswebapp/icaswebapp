import React, { useState } from 'react'

export default ({ handler }) => {
    const [state, setstate] = useState(null)
    return (
        <>
            <h1>WRITE A NEW QUESTION</h1>
            <input name="title" type="text" onChange={(e) => {
                setstate(e.target.value)
            }}>
            </input>

            <button onClick={() => {
                handler(state)
            }}>submit</button>
        </>
    )
}
