import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';


const SignUp = () => {
    return (
        <Container fluid={true}>
            <Row className="centered">
              <Col md="4" md-offset="4">
              <Panel>
                <Form>
                    <legend>Sign Up</legend>
                    <Input hint="First Name" />
                    <Input hint="Last Name" />
                    <Input hint="Email" />
                    <Input hint="Password" />
                    <Button color="primary" variant="raised">Submit</Button>
              </Form>
              </Panel>
              </Col>
            </Row>
        </Container>
    )
};

export default SignUp;