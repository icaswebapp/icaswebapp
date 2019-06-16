import React from 'react';
import firebase from '../../Backend/Firebase';
import protectedScreen from '../../Backend/Protector';

const Home = (props) => {
    return (          
            <div>
                <h1 className='f3 tc underline yellow'>HOME PAGE</h1>  
                <h1 className='f1 tc underline dark-blue'>Hello , {firebase.getCurrentUsername()}</h1>  
            </div>     
    )
}
export default protectedScreen(Home);

