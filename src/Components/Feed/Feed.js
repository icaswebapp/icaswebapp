import React from 'react'
import protectedScreen from '../../Backend/Protector';

const Feed = (props) => {
    
    return (
        <div>
            <h1 className='f1 tc fw9'>FEED</h1>
        </div>
    )
}

export default protectedScreen(Feed);