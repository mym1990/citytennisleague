import React from 'react';
import './App.css';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';




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
            <Container fluid={true}>
                <Row>
                    <Col md="9"><h3>City League Tennis</h3></Col>
                    <Col md="3">
                        <Button color="primary">Join Free</Button>
                        <Button color="accent">Sign In</Button>
                    </Col>
                </Row>

                <Row className="welcome">
                    <Col className="welcomeLeft" md="8">
                        <row>
                            <h2>Tennis league with convenient and flexible match scheduling.</h2>
                        </row>
                        <row>
                            <Button color="primary">Join Free</Button>
                        </row>
                    </Col>
                </Row>

                <Row>
                    <Col md="3">
                        <Panel>
                            Content
                        </Panel>
                    </Col>

                    <Col md="4">
                        <Panel>
                            Content
                        </Panel>
                    </Col>

                    <Col md="4">
                        <Panel>
                            Content
                        </Panel>
                    </Col>
                </Row>


            </Container>
        );
    }
}
//<UserList users={this.state.users} />
//<AddUser onAddUser={this.handleAddUser.bind(this)} />
export default App;