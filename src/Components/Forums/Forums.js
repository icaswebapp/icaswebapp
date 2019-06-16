import React from 'react';
import protectedScreen from '../../Backend/Protector';


const Forums = (props) => {
    
    return (
        <div>
            <h1 className='f1 tc fw9'>FORUMS</h1>
        </div>
    )
}

export default protectedScreen(Forums);

