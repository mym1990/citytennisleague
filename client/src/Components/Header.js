import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <Container>
    <Row>
        <Col md="8" className="mui--appbar-height mui--appbar-line-height">
            City Tennis League
        </Col>
        <Col className="buttonClass" md="4">
            <Button color="danger"><Link style={{display: 'block', height: '100%'}} to='/Signup'>Sign Up</Link></Button>
            <Button color="primary"><Link style={{display: 'block', height: '100%'}} to='/Login'>Login</Link></Button>
        </Col>
    </Row>
  </Container>
)

export default Header
    
    
