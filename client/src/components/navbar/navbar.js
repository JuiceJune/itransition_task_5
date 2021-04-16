import React from 'react'
import {Button, Container, Navbar} from 'react-bootstrap';
import {TrashFill, Unlock} from "react-bootstrap-icons";


export const Menu = (props) => {

    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Table of users</Navbar.Brand>
                <Button onClick={props.blockUsers} variant="outline-dark">Block</Button>
                <a href="#" onClick={props.unBlockUsers}><Unlock color="dark">Unblock</Unlock></a>
                <a href="#" onClick={props.deleteUsers}><TrashFill color="dark"/></a>
                <a href="/" onClick={props.logoutHandler}><Button variant="outline-danger">Exit</Button></a>
            </Container>
        </Navbar>
    )
}


