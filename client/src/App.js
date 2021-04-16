import {BrowserRouter as Router} from 'react-router-dom'
import {AuthContext} from "./context/AuthContext";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {useState} from "react";
import {MenuContainer} from "./components/navbar/navbarContainer";
import 'materialize-css'

function App() {

    const [users, setUsers] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([])

    const {token, login, logout, userId, userStatus} = useAuth()
    const isAuthenticated = !!token

    const routes = useRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={
            {token, login, logout, userId, isAuthenticated, userStatus, users, setUsers, selectedUsers, setSelectedUsers}
        }>
            <Router>
                {isAuthenticated && <MenuContainer/>}
                {routes}
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
