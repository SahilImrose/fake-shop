import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Shop from './Pages/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleProduct from './Pages/SingleProduct/SingleProduct';

function App() {

  return (
    <>
      <Router>
          <NavBar />
        <Switch >
          <Route path="/" exact>
          <Shop />
          </Route>
          <Route path="/product/:pdId">
            <SingleProduct />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
