import React from 'react'
import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Header from './Components/Header'
import Main from './Components/Main'
import Subheader from './Components/Subheader'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
          <Container>
            <Row>
                <Header />
                <Subheader />
                <Main />
            </Row>
          </Container>
        );
      }
}

export default App;
