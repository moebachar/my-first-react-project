import React from 'react';
import fire from '../../assets/images/fire.png';
import row from '../../assets/images/row.png';
import studying from '../../assets/images/studying.png';
import './posts.scss';
import Post from './Post';

function Posts({blogs}) {
    const prim = blogs[0];
    const sec = blogs[1];
    const ord1 = blogs[2];
    const ord2 = blogs[3];
    
    return (
        <div className='activities' id='blogs'>
            <div className='activities__heading'><div><img src={fire}/>Our Blogs</div><button className='activities__heading__show-all'>Show all<img src={row} /></button></div>
            <div className='activities__text'>We present for your the events organized by our club through the past few years and projects did by our lovely members</div>
            <div className='activities__posts'>
                <Post heading={prim.title} subHeading={prim.subHeading} source={prim.image} text={prim.content.substring(0,190) + '...'} writer={'Writer : ' + prim.writer} type='prim' />
                <Post heading={sec.title} subHeading={sec.subHeading} source={sec.image} text={sec.content.substring(0,100) + '...'} writer={'Writer : ' + sec.writer} type='sec' />
                <Post heading={ord1.title} subHeading={ord1.subHeading} source={ord1.image} text={ord1.content.substring(0,100) + '...'} writer={'Writer : ' + ord1.writer} type='ord1' />
                <Post heading={ord2.title} subHeading={ord2.subHeading} source={ord2.image} text={ord2.content.substring(0,100) + '...'} writer={'Writer : ' + ord2.writer} type='ord2' />
            </div>
        </div>
    );
}

export default Posts;