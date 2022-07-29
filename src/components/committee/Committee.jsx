import React from 'react';
import Carousel from 'react-multi-carousel';
import './committee.scss';
import 'react-multi-carousel/lib/styles.css';
import CommitteeMember from './CommitteeMember';

function Committee({committeeMembers}) {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1134 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1134, min: 800 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 800, min: 0 },
          items: 1
        }
      };

    return (
        <div className='committee' id='committee'>
            <div className='committee__heading'>Committee</div>
            <div className='committee__carousel'>
                <Carousel responsive={responsive}>
                    {committeeMembers.map( member => <CommitteeMember member={member} key={member.name} />)}
                </Carousel>
            </div>
        </div>
    );
}

export default Committee;