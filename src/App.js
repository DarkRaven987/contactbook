import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {createContact, editContact, deleteContact} from './store/actions';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        newContact: {id: 0, number: "", firstName: "", secondName: "", company:  "-",email: "", avatar: ""}
    }
  }

  render() {
    const {contacts} = this.props;
    let newContact = {...this.state.newContact};
    return (
      <div className="App">
            <div className="ui container">
                <div className="ui icon labeled menu">
                      <div className="item"><i className="icon phone square"/>Contact book</div>
                </div>

                <div className="ui segment">
                    <div className="inputMenu ui segment">
                        <div className="ui form three column grid">
                            <div className="field column">
                                <label>Name</label>
                                <div className="ui input">
                                    <input type="text" placeholder="Name"
                                           onChange={(e) => {newContact.firstName = e.target.value;}
                                           }/>
                                </div>
                            </div>
                            <div className="field column">
                                <label>Surname</label>
                                <div className="ui input">
                                    <input type="text" placeholder="Surname"
                                           onChange={(e) => {newContact.secondName = e.target.value;}
                                           }/>
                                </div>
                            </div>
                            <div className="field column">
                                <label>Contact number</label>
                                <div className="ui input">
                                    <input type="text" placeholder="Contact number"
                                           onChange={(e) => {newContact.number = e.target.value;}
                                           }/>
                                </div>
                            </div>
                            <div className="field column">
                                <label>E-mail</label>
                                <div className="ui input">
                                    <input type="text" placeholder="E-mail"
                                           onChange={(e) => {newContact.email = e.target.value;}
                                           }/>
                                </div>
                            </div>
                            <div className="field column">
                                <label>Company</label>
                                <div className="ui input">
                                    <input type="text" placeholder="Company"
                                           onChange={(e) => {newContact.company = e.target.value;}
                                           }/>
                                </div>
                            </div>
                            <div className="field column">
                                <label>Avatar</label>
                                <div className="ui input">
                                    <input type="text" placeholder="URL-address"
                                           onChange={(e) => {newContact.avatar = e.target.value;}
                                           }/>
                                </div>
                            </div>
                        </div>
                        <button className="ui inverted button big blue"
                                onClick={async() => {
                                    console.log(this.state);
                                    newContact.id = contacts[contacts.length-1].id+1;
                                    await this.setState({newContact: newContact});
                                    console.log(this.state);
                                }}>Create</button>
                    </div>

                        <div className="outputMenu">
                            <div className="ui four cards">
                                {contacts.map((el) => {
                                    return(
                                        <div className="ui card" key={el.id}>
                                            <div className="image">
                                                <img src={el.avatar} alt="/"/>
                                            </div>
                                            <div className="content">
                                                <a className="header">{`${el.firstName} ${el.secondName}`}</a>
                                                <div className="description">
                                                    <p className='ui text'>Number: {el.number}</p>
                                                    <p>Company: {el.company}</p>
                                                    <p>E-mail: {el.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
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
        contacts: state.contacts
    }
};

const putActionsToProps = (dispatch) => {
    return {
        createContact: bindActionCreators(createContact, dispatch),
        editContact: bindActionCreators(editContact, dispatch),
        deleteContact: bindActionCreators(deleteContact, dispatch),
    }
};

export default connect(putStateToProps, putActionsToProps)(App);
