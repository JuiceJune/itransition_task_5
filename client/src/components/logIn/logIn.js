import React from 'react'
import {Button, Card, Form} from 'react-bootstrap';

export const LogIn = (props) => {

    return (
        <Card>
            <Card.Body>
                <Card.Title>Log in</Card.Title>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email"
                                      type="email"
                                      placeholder="Enter email"
                                      onChange={props.changeHandler}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      name="password"
                                      placeholder="Password"
                                      onChange={props.changeHandler}
                        />
                    </Form.Group>

                    <Button variant="primary"
                            type="submit"
                            onClick={props.loginHandler}
                            disabled={props.loading}
                    >
                        Log in
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}