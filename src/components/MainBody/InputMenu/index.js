import React from 'react'

import Buttons from './buttons';
import InputGroup from "./inputgroup";

class InputMenu extends React.Component {

    render(){
        const {getEditedContact, getNewContact, setEditedContact, setNewContact} = this.props;

        let editedContact = getEditedContact();
        let newContact = getNewContact();


        return(
            <div className="inputMenu ui segment">

                <InputGroup
                    newContact={newContact}
                    editedContact={editedContact}
                />

                <Buttons
                    setEditedContact={setEditedContact}
                    setNewContact={setNewContact}
                    newContact={newContact}
                    editedContact={editedContact}
                />

            </div>
        );
    }

}


export default InputMenu;