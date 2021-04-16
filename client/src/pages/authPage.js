import React from 'react'
import {CardGroup} from "react-bootstrap";
import {SingUpContainer} from "../components/signUp/singUpContainer";
import {LogInContainer} from "../components/logIn/logInContainer";

export const AuthPage = () => {

    return(
        <CardGroup>
            <SingUpContainer/>
            <LogInContainer/>
        </CardGroup>
    )
}