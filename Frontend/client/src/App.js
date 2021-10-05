import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <BrowserRouter>
        <Switch>
              <Route path="/main" exact>
                {localStorage.getItem('token-login') ? <Dashboard/> : <Redirect to="/"/>}
              </Route>
              <Route path="/" exact>
                {localStorage.getItem('token-login') ?  <Redirect to ="/main"/>:  <Login/> }
              </Route>
            <Redirect to="/"/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
