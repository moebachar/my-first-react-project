import React from 'react';
import source from '../../assets/images/logo.png';
import './header.scss';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import youtube from '../../assets/images/youtube.png';

function Header() {
    return (
        <header className='header' id='home'>
           <div className='header__slogan'>
            <span className='header__slogan__text'>Solve</span>
            <span className='header__slogan__text'>Code</span>
            <span className='header__slogan__text'>Optimize</span>
            <span className='header__slogan__text'>Repeat</span>
            <div className='header__slogan__media'>
                <a href='https://www.facebook.com/ClubInformatiqueArtsMetiers' target="_blank"><img src={facebook} className='header__slogan__media--facebook'/></a>
                <a href='https://www.instagram.com/gadz.it/' target="_blank"><img src={youtube} className='header__slogan__media--youtube' /></a>
                <a href='https://www.youtube.com/channel/UCFnyUE8WoNdBnonSBCVGzRA/videos' target='_blank'><img src={instagram} className='header__slogan__media--instagram' /></a>
            </div>
           </div>
           <div className='header__logo-holder'>
                <div className='header__logo-holder__logo'>
                    <img src={source} alt='logo' />
                </div>
                <span className='header__logo-holder__text'>Gadz ' IT</span>
           </div>
        </header>
    );
}

export default Header;