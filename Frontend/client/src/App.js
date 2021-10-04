import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import StoreContext from "./store/StoreContext";

function App() {

  return (
  <StoreContext>
    <BrowserRouter>
      <Route path="/main" exact>
        {localStorage.getItem('token-login') ? <Dashboard/> : <Redirect to="/"/>}
      </Route>
      <Route path="/" exact>
        {localStorage.getItem('token-login') ?  <Redirect to ="/main"/>:  <Login/> }

      </Route>
    </BrowserRouter>
  </StoreContext>
  );
}

export default App;
