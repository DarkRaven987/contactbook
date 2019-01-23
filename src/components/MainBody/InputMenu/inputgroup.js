import React from 'react';
import {connect} from "react-redux";

class InputGroup extends React.Component {

    render(){
        const {editMode, newContact, editedContact} = this.props;
        return(
            <div className="ui form three column grid">
                <div className="field column">
                    <label>Name</label>
                    <div className="ui input">
                        <input className="inputField" type="text" placeholder="Name"
                               onChange={
                                   editMode?
                                       (e) => {editedContact.firstName = e.target.value;}
                                       : (e) => {newContact.firstName = e.target.value;}

                               }/>
                    </div>
                    <div id='name' className="ui pointing label basic red warning" style={{display: 'none'}}>
                        Please enter a value
                    </div>
                </div>
                <div className="field column">
                    <label>Surname</label>
                    <div className="ui input">
                        <input className="inputField" type="text" placeholder="Surname"
                               onChange={editMode?
                                   (e) => {editedContact.secondName = e.target.value}
                                   : (e) => {newContact.secondName = e.target.value}
                               }/>
                    </div>
                    <div id='surname' className="ui pointing label basic red warning" style={{display: 'none'}}>
                        Please enter a value
                    </div>
                </div>
                <div className="field column">
                    <label>Contact number</label>
                    <div className="ui input">
                        <input className="inputField" type="text" placeholder="Contact number"
                               onChange={editMode?
                                   (e) => {editedContact.number = e.target.value}
                                   : (e) => {newContact.number = e.target.value}
                               }/>
                    </div>
                    <div id='contact' className="ui pointing label basic red warning" style={{display: 'none'}}>
                        Please enter a value
                    </div>
                    <div id='contactFormat' className="ui pointing label basic red warning" style={{display: 'none'}}>
                        Wrong format! Should be like this: 0XX-XXX-XX-XX
                    </div>
                </div>
                <div className="field column">
                    <label>E-mail</label>
                    <div className="ui input">
                        <input className="inputField" type="text" placeholder="E-mail"
                               onChange={editMode?
                                   (e) => {editedContact.email = e.target.value}
                                   : (e) => {newContact.email = e.target.value}
                               }/>
                    </div>
                    <div id='email' className="ui pointing label basic red warning" style={{display: 'none'}}>
                        Please enter a value
                    </div>
                    <div id='emailFormat' className="ui pointing label basic red warning" style={{display: 'none'}}>
                        Wrong format! Should be like this: example@email.org
                    </div>
                </div>
                <div className="field column">
                    <label>Company</label>
                    <div className="ui input">
                        <input className="inputField" type="text" placeholder="Company"
                               onChange={editMode?
                                   (e) => {editedContact.company = e.target.value}
                                   : (e) => {newContact.company = e.target.value}
                               }/>
                    </div>
                </div>
                <div className="field column">
                    <label>Avatar</label>
                    <div className="ui input">
                        <input className="inputField" type="text" placeholder="URL-address"
                               onChange={editMode?
                                   (e) => {editedContact.avatar = e.target.value}
                                   : (e) => {newContact.avatar = e.target.value}
                               }/>
                    </div>
                    <div id='avatar' className="ui pointing label basic red warning" style={{display: 'none'}}>
                        Please enter a value
                    </div>
                </div>
            </div>
        );
    }

}


const putStateToProps = (state) => {
    return{
        editMode: state.editMode
    }
};

export default connect(putStateToProps)(InputGroup);