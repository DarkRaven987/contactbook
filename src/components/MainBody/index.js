import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import InputMenu from './InputMenu';
import {changeEditMode, createContact, deleteContact, editContact} from "../../store/actions";
import {inputs} from "./collections";

class MainBody extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            newContact: {id: 0, number: "", firstName: "", secondName: "", company:  "-",email: "", avatar: ""},
            editedContact: {id: 0, number: "", firstName: "", secondName: "", company:  "-",email: "", avatar: ""},
        }
    }


    renderCardList = (arr, inputs) => {
        return(
            arr.slice(0).reverse().map((el) => {
                return(
                    <div className="ui card" key={el.id}>
                        <div className="image">
                            <img src={el.avatar} alt="/"/>
                        </div>
                        <div className="content">
                            <a className="header">{`${el.firstName} ${el.secondName}`}</a>
                            <div className="description">
                                <p className='ui text'>Number: {el.number}</p>
                                <p className='ui text'>Company: {el.company}</p>
                                <p className='ui text'>E-mail: {el.email}</p>
                            </div>
                        </div>
                        <div className="ui buttons">
                            <button className="ui button blue inverted"
                                    onClick={  () => {
                                        this.props.changeEditMode(true);
                                        this.setState({editedContact: el});
                                        inputs[0].value = el.firstName;
                                        inputs[1].value = el.secondName;
                                        inputs[2].value = el.number;
                                        inputs[3].value = el.email;
                                        inputs[4].value = el.company;
                                        inputs[5].value = el.avatar;
                                    }}
                            ><i className="icon edit outline"/></button>
                            <div className="or"/>
                            <button className="ui button red inverted" onClick={() => {
                                this.props.deleteContact(el.id);
                                this.setState({editedContact: {id: 0, number: "", firstName: "", secondName: "", company:  "-",email: "", avatar: ""}})
                            }}>
                                <i className="icon trash alternate outline"/>
                            </button>
                        </div>
                    </div>
                );
            })
        );
    };

    getNewContact = () => {
      return this.state.newContact;
    };

    setNewContact = (value) => {
        this.setState({newContact: value});
    };

    getEditedContact = () => {
        return this.state.editedContact;
    };

    setEditedContact = (value) => {
        this.setState({editedContact: value});
    };


    render(){
        const {contacts} = this.props;
        let {outputArray} = this.props;
        return(
            <div className="ui segment">
                <InputMenu
                    getNewContact = {this.getNewContact}
                    setNewContact = {this.setNewContact}
                    getEditedContact = {this.getEditedContact}
                    setEditedContact = {this.setEditedContact}
                />

                <div className="outputMenu">
                    <div className="ui three cards">
                        {
                            !!outputArray.length?
                                this.renderCardList(outputArray, inputs):
                                this.renderCardList(contacts, inputs)
                        }
                    </div>
                </div>

            </div>
        );
    }
}


const putStateToProps = (state) => {
    return{
        contacts: state.contacts
    }
};

const putActionsToProps = (dispatch) => {
    return {
        changeEditMode: bindActionCreators(changeEditMode, dispatch),
        createContact: bindActionCreators(createContact, dispatch),
        editContact: bindActionCreators(editContact, dispatch),
        deleteContact: bindActionCreators(deleteContact, dispatch),
    }
};

export default connect(putStateToProps, putActionsToProps)(MainBody);