import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {createContact, editContact, deleteContact, changeEditMode} from './store/actions';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        newContact: {id: 0, number: "", firstName: "", secondName: "", company:  "-",email: "", avatar: ""},
        editedContact: {id: 0, number: "", firstName: "", secondName: "", company:  "-",email: "", avatar: ""},
        outputArray: [],
    }
  }

  renderCardList = (arr) => {
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
                                      const inputs = document.getElementsByClassName("inputField");
                                      inputs[0].value = el.firstName;
                                      inputs[1].value = el.secondName;
                                      inputs[2].value = el.number;
                                      inputs[3].value = el.email;
                                      inputs[4].value = el.company;
                                      inputs[5].value = el.avatar;
                                  }}
                          ><i className="icon edit outline"></i></button>
                          <div className="or"></div>
                          <button className="ui button red inverted" onClick={() => {
                              this.props.deleteContact(el.id);
                              this.setState({editedContact: {id: 0, number: "", firstName: "", secondName: "", company:  "-",email: "", avatar: ""}})
                          }}>
                              <i className="icon trash alternate outline"></i>
                          </button>
                      </div>
                  </div>
              );
          })
      );
  }

    render() {
    const {contacts, createContact, deleteContact, editContact ,changeEditMode, editMode} = this.props;
    let {editedContact, outputArray} = this.state;
    let searchContacts=[];
    let newContact = {...this.state.newContact};
    return (
      <div className="App">
            <div className="ui container">
                <div className="ui  menu">
                    <div className="item" onClick={() => {console.log(contacts);console.log(this.state)}}><i className="icon phone square"/>Contact book</div>
                    <div className="right menu">
                        <div className="item">
                            <div className="ui transparent icon input">
                                <input id="search" type="text" placeholder="Search..."/>
                                <div className="icons">
                                    <i className="ui icon close link" onClick={()=>{
                                        searchContacts=[];
                                        document.getElementById('search').value='';
                                            this.setState({outputArray: searchContacts});
                                    }}/>
                                    <i className="search link icon" onClick={ (e) => {
                                        searchContacts=[];
                                        let search = document.getElementById('search').value.toLowerCase();
                                        if(search) {
                                            contacts.map((el) => {
                                                let fullName = `${el.firstName} ${el.secondName}`.toLowerCase();
                                                if (fullName.indexOf(search) > -1) {
                                                    searchContacts.push(el);
                                                }
                                            });
                                            this.setState({outputArray: searchContacts});
                                        }else{
                                            this.setState({outputArray: searchContacts});
                                        }
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ui segment">
                    <div className="inputMenu ui segment">
                        <div className="ui form three column grid">
                            <div className="field column">
                                <label>Name</label>
                                <div className="ui input">
                                    <input className="inputField" type="text" placeholder="Name"
                                           onChange={editMode?
                                                   (e) => {editedContact.firstName = e.target.value}
                                                   : (e) => {newContact.firstName = e.target.value}
                                           }/>
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
                            </div>
                        </div>
                        {editMode?
                            <div>
                                <button className="ui inverted button big blue"
                                        onClick={() => {
                                            // changeEditMode(false);
                                            editContact(editedContact);
                                        }}>Save</button>
                                <button className="ui inverted secondary big button"
                                        onClick={() => {
                                            changeEditMode(false);
                                        }}>Cancel</button>
                            </div>

                            :
                            <button className="ui inverted button big green"
                                                 onClick={async() => {
                                                     newContact.id = contacts[contacts.length-1].id+1;
                                                     await this.setState({newContact: newContact});
                                                     createContact(this.state.newContact);
                                                     console.log(contacts);
                                                 }}>Create</button> }
                    </div>

                        <div className="outputMenu">
                            <div className="ui three cards">
                                {
                                    !!outputArray.length?
                                    this.renderCardList(outputArray):
                                    this.renderCardList(contacts)
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
