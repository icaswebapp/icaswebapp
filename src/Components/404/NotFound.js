import React from 'react';
import {ABOUT } from '../../Constants/constants';
import './NotFound.css';
import {Link} from 'react-router-dom';



const NotFound = (props) => {
    return (
        <div>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                        <h2>Page not found</h2>
                    </div>
                    <Link to={ABOUT}>Homepage</Link>
                </div>
	        </div>
        </div>
    )
}

export default NotFound;

