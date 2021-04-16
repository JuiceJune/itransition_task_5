import React, {useContext, useEffect} from "react";
import {AuthContext} from "../../context/AuthContext";
import UsersTable from "./usersTable";

const UsersTableContainer = () => {

    const user = useContext(AuthContext)

    function toggleUser(id) {
        if (isChecked(id)) {
            user.setSelectedUsers(user.selectedUsers.filter(element => element !== id))
        } else {
            user.setSelectedUsers([...user.selectedUsers, id])
        }
    }

    function isChecked(id) {
        return user.selectedUsers.includes(id)
    }

    function toggleAllUsers() {
        if (user.selectedUsers.length === user.users.length) {
            user.setSelectedUsers([])
        } else {
            user.setSelectedUsers(user.users.map(user => user._id))
        }
    }

    function getUsers() {
        fetch('/api/users/getUsers')
            .then(res => res.json())
            .then(data => user.setUsers(data))
    }

    useEffect(() => {
        getUsers()
    }, [])


    return(
        <UsersTable users={user.users}
                    selectedUsers={user.selectedUsers}
                    toggleUser={toggleUser}
                    toggleAllUsers={toggleAllUsers}
                    isChecked={isChecked}
        />
    )
}

export default UsersTableContainer