import React from 'react';
import rocket from '../../assets/images/rocket.png';
import studying from '../../assets/images/studying.png';
import row from '../../assets/images/row.png';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css3.png';
import python from '../../assets/images/python.png';
import cPlusPlus from '../../assets/images/c-plus-plus.png';
import  './ourCourses.scss';
import Course from './Course';

function OurCourses(props) {
    return (
        <div className='our-courses' id='courses'>
            <div className='our-courses__heading'>
                <img  src={rocket} />
                Our Courses
            </div>
            <div className='our-courses__main'>
                <div className='our-courses__main__img'>
                    <img src={studying} />
                </div>
                <div className='our-courses__main__description'>
                    <div className='our-courses__main__description__heading'>Improve your programming skills through out our courses</div>
                    <div className='our-courses__main__description__text'>
                        Our very best members will guid you through a fun learning journy, in which you will get the basic knowlege about programming in different fields. Amazing interactive courses
                        are availabe, get your chance to involve 
                    </div>
                    <button type='button' className='our-courses__main__description__registration'>Registration <img src={row} /></button>
                </div>
            </div>
            <div className='our-courses__courses'>
                <Course sources={[html, css]} name='Web Development' heading='How to build responsive web pages using latest technologies' footerText='Friendly beginners HTML/CSS course'/>
                <Course sources={[python]} name='Python' heading='Take your first step in the Artificial intelligence field by learning Python' footerText='Friendly beginners Python course'/>
                <Course sources={[cPlusPlus]} name='C++' heading='The essential C++ course' footerText='Friendly beginners c++ course'/>
            </div>
            <button type='button' className='our-courses__registration--sub'>Registration <img src={row} /></button>
        </div>
    );
}

export default OurCourses;