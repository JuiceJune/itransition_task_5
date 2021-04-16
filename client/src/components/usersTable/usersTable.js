import {Form, FormCheck, Table} from "react-bootstrap";
import Moment from "react-moment";

const UsersTable = (props) => {

    return(
        <Table striped bordered hover responsive="sm" >
            <thead>
            <tr>
                <th>
                    <FormCheck inline={true}
                               checked={props.users.length === props.selectedUsers.length}
                               onChange={props.toggleAllUsers}
                    />All</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date of registration</th>
                <th>Last log in</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {props.users.map((user, index) => {
                return(
                    <tr key = {user._id}>
                        <td>
                            <Form.Group controlId="formBasicCheckbox">

                                <Form.Check type="checkbox"
                                            value={user._id} inline={true}
                                            checked={props.isChecked(user._id)}
                                            data-id={user._id}
                                            onChange={((e) => props.toggleUser(e.target.dataset.id))}
                                />{index}
                            </Form.Group>
                        </td>
                        <td><div>{user._id}</div></td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td><Moment interval={0} format="YYYY-MM-DD HH:mm">{user.registered}</Moment></td>
                        <td><Moment interval={0} format="YYYY-MM-DD HH:mm">{user.lastLogin || '-'}</Moment></td>
                        <td>{user.status}</td>
                    </tr>
                )
            })}
            </tbody>
        </Table>
    )
}

export default UsersTable