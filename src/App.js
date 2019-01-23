import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {createContact, editContact, deleteContact, changeEditMode} from './store/actions';
import Header from './components/Header';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        newContact: {id: 0, number: "", firstName: "", secondName: "", company:  "-",email: "", avatar: ""},
        editedContact: {id: 0, number: "", firstName: "", secondName: "", company:  "-",email: "", avatar: ""},
        outputArray: [],
    }
  }

  setOutputArray = (arr) => {
      this.setState({outputArray: arr});
  }


  checkNameInput = (inputs, outputs) => {
      Array.from(outputs).forEach(el => el.style.display='none');
      let result = false;
      if(inputs[0].value===''){
          outputs[0].style.display = "block";
          result = true;
      }
      if (inputs[1].value===''){
          outputs[1].style.display = "block";
          result = true;
      }
      if (inputs[2].value===''){
          outputs[2].style.display = "block";
          result = true;
      }else if(inputs[2].value) {
          let num = inputs[2].value.split('-');
          for (let i = 0; i < num.length; i++) {
              for (let j = 0; j < num[i].length; j++) {
                  if (num[i][j] === ' ') {
                      outputs[3].style.display = "block";
                      result = true;
                  }
              }
          }
          if (!result) {
              if ((num[0].length !== 3) || (num[1].length !== 3) || (num[2].length !== 2) || (num[3].length !== 2)) {
                  outputs[3].style.display = "block";
                  result = true;
              }
          }
      }
      if(inputs[3].value===''){
          outputs[4].style.display = "block";
          result = true;
      }else if(inputs[3].value){
          let email = inputs[3].value.split('@');
          if((email.length !==2)){
              outputs[5].style.display = "block";
              result = true;
          }
          if(!result){
              let tag = email[1].split('.');
              if(tag.length!==2){
                  outputs[5].style.display = "block";
                  result = true;
              }
          }
      }
      if(inputs[5].value===''){
          outputs[6].style.display = "block";
          result = true;
      }


    if(!result){
        return result;}
  };

  clearInputs = (inputs) => {
      inputs[0].value = '';
      inputs[1].value = '';
      inputs[2].value = '';
      inputs[3].value = '';
      inputs[4].value = '';
      inputs[5].value = '';
  };

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

    render() {

        const {contacts, createContact, editContact ,changeEditMode, editMode} = this.props;
        let {editedContact, outputArray} = this.state;
        let newContact = {...this.state.newContact};
        const inputs = document.getElementsByClassName("inputField");
        const warnings = document.getElementsByClassName("warning");
    return (
      <div className="App">
            <div className="ui container">

                <Header
                    setOutputArray={this.setOutputArray}
                />

                <div className="ui segment">
                    <div className="inputMenu ui segment">
                        <div className="ui form three column grid">
                            <div className="field column">
                                <label>Name</label>
                                <div className="ui input">
                                    <input className="inputField" type="text" placeholder="Name"
                                           onChange={
                                                editMode?
                                               (e) => {editedContact.firstName = e.target.value}
                                               : (e) => {newContact.firstName = e.target.value}

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
                        {editMode?
                            <div>
                                <button className="ui inverted button big blue"
                                        onClick={async() => {
                                            await changeEditMode(false);
                                            await editContact(editedContact);
                                            this.clearInputs(inputs);
                                        }}>Save</button>
                                <button className="ui inverted secondary big button"
                                        onClick={async() => {
                                            await changeEditMode(false);
                                            this.clearInputs(inputs);
                                        }}>Cancel</button>
                            </div>

                            :
                            <button className="ui inverted button big green"
                                                 onClick={async () => {
                                                     let result = this.checkNameInput(inputs,warnings);
                                                     if(result===false){
                                                         newContact.id = contacts[contacts.length-1].id+1;
                                                         await this.setState({newContact: newContact});
                                                         await createContact(this.state.newContact);
                                                         this.clearInputs(inputs);
                                                     }
                                                 }
                                                 }>Create</button> }
                    </div>

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
          </div>
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
        deleteContact: bindActionCreators(deleteContact, dispatch),
    }
};

export default connect(putStateToProps, putActionsToProps)(App);
