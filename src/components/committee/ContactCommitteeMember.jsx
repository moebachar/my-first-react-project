import React from 'react';
import Form from '../common/Form';
import Joi from 'joi-browser';
import {toast} from 'react-toastify';

class ContactCommitteeMember extends Form {
    state = {
        data: {
          mail: "",
          message: ''
        },
        errors: {}
    } 

    schema = {
        mail : Joi.string().email().required().label('Your email'),
        message: Joi.string()
    }

    doSubmit = () =>{

        
        //call the server
        const {name, onShowMember} = this.props;
        const msg = `message has been sent to ${name}`
        toast.success(msg);
        onShowMember();
    }

    render() {

        const {onShowMember} = this.props;
        
        return (
            <form onSubmit={this.handleSubmit} className='contact-member__form'>
                {this.renderInput('mail', '', 'text' ,'Your email')}
                {this.renderTextArea('message', 'Message')}
                <div className='contact-member__form__buttons'>
                    {this.renderButton('Send')}
                    <button type='buttom' onClick={onShowMember}>Back</button>
                </div>
            </form>
        );
    }
}
 
export default ContactCommitteeMember;