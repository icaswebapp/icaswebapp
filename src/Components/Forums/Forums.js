import React, { useState } from 'react';
import protectedScreen from '../../Backend/Protector';
import displayCollection from './Helper/Display/displayCollection'
import ForumsItem from './Helper/Display/ForumsItem'
var getCollection = require('./Helper/logic').default.getCollection

const Forums = (props) => {
    const [state, setstate] = useState(null)

    getCollection('Posts')
        .then(collection => setstate(displayCollection(collection, ForumsItem)))

    return (
        <div>
            <h1 className="f1 tc black underline fw9">FORUMS</h1>
            {state}<br />
        </div>
    )
}

export default protectedScreen(Forums);

