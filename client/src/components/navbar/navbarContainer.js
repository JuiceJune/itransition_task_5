import React, {useContext} from 'react'
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from 'react-router-dom'
import {Menu} from "./navbar";


export const MenuContainer = () => {

    const user = useContext(AuthContext)

    function deleteUsers() {
        for (let u of user.selectedUsers) {
            if(user.userId === u){
                user.logout()
                history.push('/')
            }
            fetch(`/api/users/deleteUsers?_id=${u}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
                , method: 'DELETE'
            }).then(() => {fetch('/api/users/getUsers')
                .then(res => res.json())
                .then(data => user.setUsers(data))})
        }
        user.setSelectedUsers([])
    }

    function blockUsers() {
        for (let u of user.selectedUsers) {
            if(user.userId === u){
                user.logout()
                history.push('/')
            }
            fetch(`/api/users/blockUsers?_id=${u}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
                , method: 'PATCH'
            }).then(response => response.json()).then(() => {fetch('/api/users/getUsers')
                .then(res => res.json())
                .then(data => user.setUsers(data))})
        }
        user.setSelectedUsers([])
    }

    function unBlockUsers() {
        for (let u of user.selectedUsers) {
            fetch(`/api/users/unBlockUsers?_id=${u}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
                , method: 'PATCH'
            }).then(response => response.json()).then(() => {fetch('/api/users/getUsers')
                .then(res => res.json())
                .then(data => user.setUsers(data))})
        }
        user.setSelectedUsers([])
    }

    const history = useHistory()
    const logoutHandler = event => {
        event.preventDefault()
        user.logout()
        history.push('/')
    }

    return (
        <Menu blockUsers={blockUsers}
              unBlockUsers={unBlockUsers}
              deleteUsers={deleteUsers}
              logoutHandler={logoutHandler}
        />
    )
}
