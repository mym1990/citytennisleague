import React from 'react';
import './App.css';
import ScoreInput from './Components/ScoreInput';
import PriceCard from './Components/PriceCard';

function User(props) {
    return(
        <li>
            <h4>{props.firstName}</h4>
            <p>{props.lastName}</p>
        </li>
    );
}

function UserList(props) {
    return(
        <ul className='list-group'>
            {props.users.map(User)}
        </ul>
    );
}

function AddUser(props) {
    const submit = () => {
        const firstNameInput = document.querySelector('#firstName');
        const lastNameInput = document.querySelector('#lastName');

        props.onAddUser(
            {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value
            }
        );
    };

        return (
            <div style={{display: 'flex'}}>
                <input id="firstName" placeholder="First Name" />
                <input id="lastName" placeholder="Last Name" />

                <button type="button" onClick={submit}> Add User </button>
            </div>
        );
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [
                {
                    "firstName": "Stas",
                    "lastName": "Christiansen"
                }
            ]
        };
    }

    handleAddUser(newUser) {
        fetch('/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(user => {
                this.setState({
                    users: this.state.users.concat(newUser)
                });
            })
    }

    render() {
        return (
          <div className="App">
              <div className={"content"}>
                  <div className={"right-body"}>
                      <PriceCard city="San Francisco" />
                      <PriceCard city="Atlanta" />
                      <PriceCard city="Nashville" />
                  </div>
              </div>
          </div>
        );
      }
}
//<UserList users={this.state.users} />
//<AddUser onAddUser={this.handleAddUser.bind(this)} />
export default App;
