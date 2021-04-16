import {Switch, Route, Redirect} from 'react-router-dom'
import {TablePage} from "./pages/tablePage";
import {AuthPage} from "./pages/authPage";


export const useRoutes = isAuthenticated => {

    if(isAuthenticated) {
        return(
            <Switch>
                <Route path="/table" exact>
                    <TablePage/>
                </Route>
                <Redirect to="/table"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/">
                <AuthPage />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}