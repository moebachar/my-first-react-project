import React from 'react';
import row from '../../assets/images/row.png';
import laptop from '../../assets/images/binary-coding.png';
import wave from '../../assets/images/wave.png'
import './club.scss';
import {Link} from 'react-router-dom';

function Club(props) {
    return (
        <div className='club' id='club'>
            <div className='club__text-bloc'>
                <div className='club__text-bloc__heading'><img src={wave} />Our Club</div>
                <div className='club__text-bloc__text-holder'>
                    <span className='club__text-bloc__text-holder--text'>Explore yourself</span>
                    <span className='club__text-bloc__text-holder--text'>Share and get experience</span>
                    <span className='club__text-bloc__text-holder--text'>Build your project</span>
                    <span className='club__text-bloc__text-holder--text'>Have fun</span>
                </div>
                <Link type='button' className='club__text-bloc__join-us' to='join-form'>join us <img src={row} /></Link>
            </div>
            <div className='club__img-bloc'>
                <img src={laptop} />
            </div>
        </div>
    );
}

export default Club;