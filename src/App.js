import React, { Component } from 'react';
import './App.css';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {createContact, editContact, deleteContact} from './store/actions';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {

    }
  }

  render() {
    const {contacts} = this.props;
    return (
      <div className="App">
        <div className="ui container">
          <div className="ui menu">
              <div className="ui item">Contact book</div>
              <div className="ui item right">About us</div>
          </div>
          <div className="c ui five column grid segment">
              {contacts.map((el) => {
                return(
                    <div className="column">
                        <div className="ui card">
                            <div className="image">
                                <img src={el.avatar}/>
                            </div>
                            <div className="content">
                                <a className="header">{`${el.firstName} ${el.secondName}`}</a>
                                <div className="description">
                                    <p>Number: {el.number}</p>
                                    <p>Company: {el.company}</p>
                                    <p>E-mail: {el.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
              })}
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
