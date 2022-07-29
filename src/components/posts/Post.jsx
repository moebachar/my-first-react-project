import React from 'react';

function Post({heading, subHeading, source, text, writer, type}) {
    return (

        <div className={`activities__posts__post--${type}`}>
            <div className={`activities__posts__post--${type}__heading`}>{heading}</div>
            <div className={`activities__posts__post--${type}__sub-heading`}>{subHeading}</div>
            <img src={source} />
            <div className={`activities__posts__post--${type}__text`}>{text}</div>
            <div className={`activities__posts__post--${type}__writer`}>{writer}</div>  
        </div>

    );
}

export default Post;