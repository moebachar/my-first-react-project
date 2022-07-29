import React from 'react';

function Course({sources, name, heading, footerText}) {

    return (
        <div className='our-courses__courses__container'>
            <div className='our-courses__courses__container__name'>{name}</div>
            <div className='our-courses__courses__container__heading'>{heading}</div>
            <div className='our-courses__courses__container__footer'>
                <div className='our-courses__courses__container__footer--img'>
                    {sources.map((s, index) => <img key={index} src={s} />)}
                </div>
                <div className='our-courses__courses__container__footer--text'>{footerText}</div>
            </div>
        </div>
    );
}

export default Course;