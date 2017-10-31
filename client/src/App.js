import React from 'react';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Button from 'material-ui/Button';

const Links = () => (
    <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to={{pathname: '/about'}}>About</NavLink>
        <NavLink activeClassName="active" to={{pathname: "/contact"}}>Contact</NavLink>
        <NavLink activeClassName="active" to="/login">Login</NavLink>
        <NavLink activeClassName="active" to="/signup">Sign Up</NavLink>
    </nav>
)

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

    render() {
        return (
          <Router>
            <div>
                <Links />
                <Route exact path="/" render={() => <h1>Home</h1>} />
                <Route exact path="/about" render={() => <h1>About</h1>} />
                <Route exact path="/contact" render={() => <h1>Contact</h1>} />
                <Route exact path="/login" render={() => <Login/>} />
                <Route exact path="/signup" render={() => <SignUp/>} />
            </div>
          </Router>
        );
      }
}

export default App;
