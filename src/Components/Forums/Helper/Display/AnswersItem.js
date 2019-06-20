import React from 'react'

function ForumsItem({ object }) {

    return (
        <article className="mw8 center br2 ba b--light-blue bg-lightest-blue">
            <h1>Title: {object.content}</h1><br/>
            <h3>Author: user_{object.user_id}</h3><br/>
            <img src={object.image_url}></img>
        </article>
    )
}


export default ForumsItem;