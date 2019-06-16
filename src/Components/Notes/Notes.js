import React from 'react'
import protectedScreen from '../../Backend/Protector';

const Notes = (props) => {
    
    return (
        <div>
            <h1 className='f1 tc fw9'>NOTES</h1>
        </div>
    )
}

export default protectedScreen(Notes);
