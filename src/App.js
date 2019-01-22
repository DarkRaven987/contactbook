import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        contacts: [
            {id: 1, number: '098-701-80-61', firstName: 'Oleh', secondName: 'Tsibulskyi', company:  '-',email: 'oleg123@gmail.com', avatar: '...'},
            {id: 2, number: '098-702-85-58', firstName: 'Alena', secondName: 'Gorovaya', company:  'IT-corp',email: 'alena1989@gmail.com', avatar: '...'},
            {id: 3, number: '098-345-67-33', firstName: 'Max', secondName: 'Mad', company:  'Gamedev 9x',email: 'madmax9000@gmail.com', avatar: '...'}
        ]
    }
  }

  render() {
    const {contacts} = this.state;
    return (
      <div className="App">
        <div className="ui container">
          <div className="ui menu">
          </div>
          <div>
            <div className="inputMenu"></div>
            <div className=" c ui segment ">
              {contacts.map((el) => {
                return(
                    <div key={el.id} className='ui segment' onClick={() => console.log(el.id)}>
                      <div>
                        {`${el.number} ${el.firstName} ${el.secondName} ${el.company} ${el.email} `}
                      </div>
                      <div className="ui fitted divider"></div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
