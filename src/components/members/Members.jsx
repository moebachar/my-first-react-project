import React, {useState} from 'react';
import './members.scss';
import backTics from '../../assets/svgs/back-tics.svg';
import facebookIcon from '../../assets/images/facebook.png';
import instagramIcon from '../../assets/images/instagram.png';
import linkedinIcon from '../../assets/images/linkedin.png';
import SearchBox from '../common/SearchBox';



function Members({members}) {
    const [state, setState] = useState({
        members: members,
        searchQuery: "",
        currentMemberIndex:0
    })

    const getPagedData = () => {
        const {
          searchQuery,
          members: allMembers
        } = state;

        let filtered = allMembers;
        
        if (searchQuery)
          filtered = allMembers.filter(m =>
            m.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

  
        return { totalCount: filtered.length , data: filtered };
      
    }

    const  handleSearch = query => {
        const newstate = {...state};
        newstate.searchQuery = query;
        newstate.currentMemberIndex = 0;
        setState(newstate);
    };

    const handelPrevMember = () => {
        const newState = {...state};
        newState.currentMemberIndex--;
        setState(newState);
    }

    const handelNextMember = () => {
        const newState = {...state};
        newState.currentMemberIndex++;
        setState(newState);
    }


    const currentMember = (getPagedData().totalCount === 0 )? {name : '',
    description : 'Member Not Found',
    roles : [''],
    year : '',
    image : 'Questions-bro.svg',
    media : false} : 
    getPagedData().data[state.currentMemberIndex];

    const {name, description, roles, year, image, media} = currentMember;

    const {facebook, instagram,  linkedin}  = (media? media:{});

    const {searchQuery, currentMemberIndex} = state;

    const totalCount = getPagedData().totalCount;
    
    return (
        <div className='members' id='members'>
            <div className='members__heading'><img src={backTics} />Our Club Members</div>
            <div className='members__content'>
                <div className='members__content__img'>
                    <img src={image} />
                </div>
                <div className='members__content__text'>
                    <div className='members__content__text__name'>{name}</div>
                    <div className='members__content__text__description'><div>“</div>{description}</div>
                    <div className='members__content__text__role-year'>
                        <div className='members__content__text__role-year--role'>{roles[0]}</div>
                        <div className='members__content__text__role-year--year'>{totalCount ? `year ${year}A` : ''}</div>
                    </div>
                    <div className='members__content__text__contact'>
                        {facebook && <div className='media'><a  href={facebook} target='_blank'><img src={facebookIcon} /></a></div>}
                        {instagram && <div className='media'><a  href={instagram} target='_blank'><img src={instagramIcon} /></a></div>}
                        {linkedin && <div className='media'><a  href={linkedin} target='_blank'><img src={linkedinIcon} /></a></div>}
                    </div>
                    <div className='members__content__text__filters'>
                        <div className='members__content__text__filters__buttons'>
                            <button type='button' className='members__content__text__filters__buttons__prev' onClick={handelPrevMember} disabled={(totalCount === 0 || currentMemberIndex === 0) ? true:false}>Prev</button>
                            <hr></hr>
                            <button type='button' className='members__content__text__filters__buttons__next' onClick={handelNextMember} disabled={(totalCount === 0 || currentMemberIndex === totalCount - 1) ? true:false}>Next</button>
                        </div>
                        <div className='members__content__text__filters__search-bar'><SearchBox value={searchQuery} onChange={handleSearch} /></div>         
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Members; 