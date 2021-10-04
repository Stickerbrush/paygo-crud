import { BrowserRouter, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import StoreContext from "./store/StoreContext";



function App() {
  return (
  <StoreContext>
    <BrowserRouter>
      <Route path="/main">
          <Dashboard/>
      </Route>
      <Route path="/" exact>
        <Login/>
      </Route>
    </BrowserRouter>
  </StoreContext>
  );
}

export default App;
