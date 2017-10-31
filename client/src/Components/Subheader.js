import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


// The Header creates links that can be used to navigate
// between routes.
const Subheader = () => (
  <Container>
    <Row>
        <Col md="6">
        </Col>
        <Col md="6">
            <ul>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
                <li><Link to='/playerdirectory'>Player Directory</Link></li>
            </ul>
        </Col>
    </Row>
  </Container>
)

export default Subheader
    
    
