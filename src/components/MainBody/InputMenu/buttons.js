import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {changeEditMode, createContact, editContact} from "../../../store/actions";
import {checkDataInput, clearInputs} from "../functions";
import {inputs, warnings} from "../collections";

class Buttons extends React.Component {
    render(){
        let {editMode, contacts, editContact, changeEditMode, createContact, editedContact, newContact, setNewContact, setEditedContact} = this.props;
        return(
            <div>
                {editMode?
                    <div>
                        <button className="ui inverted button big blue"
                                onClick={async() => {
                                    let result = checkDataInput(inputs,warnings);
                                    if(result===false){
                                    await changeEditMode(false);
                                    await setEditedContact(editedContact);
                                    await editContact(editedContact);
                                    clearInputs(inputs);}
                                }}>Save</button>
                        <button className="ui inverted secondary big button"
                                onClick={async() => {
                                    await changeEditMode(false);
                                    clearInputs(inputs);
                                }}>Cancel</button>
                    </div>

                    :
                    <button className="ui inverted button big green"
                            onClick={async () => {
                                let result = checkDataInput(inputs,warnings);
                                if(result===false){
                                    newContact.id = contacts[contacts.length-1].id+1;
                                    await setNewContact(newContact);
                                    await createContact(newContact);
                                    clearInputs(inputs);
                                }
                            }
                            }>Create</button> }
            </div>
        );
    }

}

const putStateToProps = (state) => {
    return{
        contacts: state.contacts,
        editMode: state.editMode
    }
};

const putActionsToProps = (dispatch) => {
    return {
        changeEditMode: bindActionCreators(changeEditMode, dispatch),
        createContact: bindActionCreators(createContact, dispatch),
        editContact: bindActionCreators(editContact, dispatch),
    }
};

export default connect(putStateToProps, putActionsToProps)(Buttons);