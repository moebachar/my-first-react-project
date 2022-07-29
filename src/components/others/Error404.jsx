import React from 'react';
import pageNotFound from '../../assets/svgs/404-page.svg';
import './error404.css';
function Error404(props) {
    return (
        <div className='error'>
            <img src={pageNotFound} />  
        </div>
    );
}

export default Error404;