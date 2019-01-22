import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {createContact, editContact, deleteContact} from './store/actions';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        newContact: {id: 0, number: '', firstName: '', secondName: '', company:  '',email: '', avatar: ""},

    }
  }

  render() {
    const {contacts} = this.props;
    return (
      <div className="App">
            <div className="ui container">
                <div className="ui icon labeled menu">
                      <div className="item"><i className="icon phone square"></i>Contact book</div>
                </div>

                <div className="ui segment">
                    <div className="inputMenu ui segment">
                        <div className="ui form three column grid">
                            <div className="field column">
                                <label>Name</label>
                                <div className="ui input">
                                    <input type="text" placeholder="Name"/>
                                </div>
                            </div>
                            <div className="field column">
                                <label>Surname</label>
                                <div className="ui input">
                                    <input type="text" placeholder="Surname"/>
                                </div>
                            </div>
                            <div className="field column">
                                <label>Contact number</label>
                                <div className="ui input">
                                    <input type="text" placeholder="Number"/>
                                </div>
                            </div>
                            <div className="field column">
                                <label>E-mail</label>
                                <div className="ui input">
                                    <input type="text" placeholder="E-mail"/>
                                </div>
                            </div>
                            <div className="field column">
                                <label>Company</label>
                                <div className="ui input">
                                    <input type="text" placeholder="Company"/>
                                </div>
                            </div>
                            <div className="field column">
                                <label>Avatar</label>
                                <div className="ui input">
                                    <input type="text" placeholder="Image URL"/>
                                </div>
                            </div>
                        </div>
                        <button className="ui inverted button big blue">Create</button>
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
