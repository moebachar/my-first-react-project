import React from 'react';
import valid from '../../assets/svgs/Completed-bro.svg';
import failed from '../../assets/svgs/data-pana.svg';
import { useParams, useNavigate } from 'react-router';
import Error404 from './Error404';
import './completed.css';

function Completed(props) {
    const {success, day, place, hour} = useParams();
    
    let navigate = useNavigate();
    
    return (
        <>
            {success === 'success' &&
            <div className="completed">
                <img src={valid} />
                <div>Your application had successfully submited. <br/> be in the {place} at {hour} {day} for your interview</div>
                <a onClick={() => navigate('/')}>Home</a>
            </div>
            }

            {success === 'failed' &&
            <div className="completed">
                <img src={failed} />
                <div>An ERROR had accured, please try later</div>
                <a onClick={() => navigate('/')}>Home</a>
            </div>
            }
            {success !== 'success' && success!== 'failed' && <Error404 />}
        </>
    );
}

export default Completed;