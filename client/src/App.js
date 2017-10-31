import React from 'react';
import './App.css';
import ScoreInput from './Components/ScoreInput';
import PriceCard from './Components/PriceCard';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Links = () => (
    <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to={{pathname: '/about'}}>About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
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
            </div>
          </Router>
        );
      }
}

export default App;
