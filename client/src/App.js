import "./App.css";
import { Switch, Route } from "react-router-dom";
import ProductList from "./Pages/ProductList/ProductList";
import Home from "./Pages/Home/Home";
import ContactUS from "./Pages/ContactUS/ContactUS";
import Error from "./Pages/Error/Error";
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Navbarr from './Components/Navbar/Navbar.js'
import Cart from './Pages/Cart/Cart'
import AddEditContact from "./Pages/AddEditContact/AddEditContact";

function App() {
  return (
    <div className="App">
         <Navbarr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Product" component={ProductList} />
        <Route path="/ContactUS" component={ContactUS} />
        <Route path="/login" component={Login} />
        <Route path="/CreateAccount" component={Register} />
        <Route path="/Cart" component={Cart} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
