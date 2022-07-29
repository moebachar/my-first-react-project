import React from 'react';
import Form from '../components/common/Form';
import img1 from '../assets/svgs/Typing-bro.svg';
import _ from 'lodash';
import Joi from "joi-browser";
import { useNavigate } from 'react-router';
import { getCells } from '../services/fakeCellsService';
import './joinForm.scss';


function withHook(Component) {
    return function WrappedComponent(props) {
      const navigate = useNavigate();
      return <Component {...props} navigate={navigate} />;
    }
}

class JoinFrom extends Form {
    state = { 
        data: { email: '', name:'', phone:'', year:'', cell:'', day:''},
        errors: {},
        years: _.range(5).map(i => `${i + 1}A`),
        cells: getCells().map(cell => cell.name),
        days: ['monday', 'wendnesday'],
        place: 'departement info cc14',
        hour: '19:00',
    }
    

    schema = {
        email: Joi.string().required().email().label('E-mail'),
        name: Joi.string().max(20).required().label('Name'),
        phone : Joi.string().max(10).min(10).required().label('Phone'),
        year: Joi.required().label('Year'),
        cell: Joi.required().label('Cell'),
        day: Joi.required().label('Day')

    };  

    doSubmit =  () => {
        
        //call back end
        const responseStatus = 'success';
        const {place, hour} = this.state;
        const {day} = this.state.data;
        this.props.navigate(`/completed/${responseStatus}/${day}/${place}/${hour}`, {replace: true});
        
    
    };
    render() {
        const {years, cells, days} = this.state;
        return (
            <>
                <div className="join-form">
                    <div className="join-form__heading">
                        <div className="join-form__heading__img">
                            <img src={img1} />
                        </div>
                        <div className="join-form__heading__text">
                            <span className="join-form__heading__text--title">Application Form</span>
                            <span className="join-form__heading__text--sub">Fill the form to get a recruting interview</span>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('email', 'E-mail', 'text', 'example@gmail.com')}
                        {this.renderInput('name', 'Full Name', 'text', 'Write your full name')}
                        {this.renderInput('phone', 'Phone Number', 'text', '0661...')}
                        {this.renderSelect('year', 'Year', years, 'Year')}
                        {this.renderSelect('cell', 'Cell', cells, 'Cell you are intrested in')}
                        {this.renderSelect('day', 'Day', days, 'recruting Day')}
                        {this.renderButton('Save')}
                    </form>

                    
                </div>
            </>
        );
    }
}
 
export default withHook(JoinFrom);