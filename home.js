import './home.css';
import {Jumbotron} from 'react-bootstrap';
import { Row, Col, Form, Button} from 'react-bootstrap';

import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <section class="container">
                <div class="left-half">
                    <article>
                        <h1>FarmPro</h1>
                    </article>
                </div>
                <div class="right-half">
                    <div className = "entry-page">
                        <Jumbotron className= "form-box">
                        <Row>
                            <Col>
                            <Form autoComplete= "off">
                            <hr/>
                            <h4>Admin Login</h4>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                    type= "username"
                                    name= "username" 
                                    placeholder= "Enter Username"
                                    required
                                    />
                                </Form.Group>
                                    <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                    type= "password"
                                    name= "password" 
                                    placeholder= "Enter Password"
                                    required
                                    />
                                </Form.Group>
                                <div class="text-center">
                                <Button type="Submit" className="btn btn-info" >Login</Button>
                                </div>
                                <hr/>
                            </Form>
                            <hr />
                            </Col>
                        </Row>
                        </Jumbotron>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;