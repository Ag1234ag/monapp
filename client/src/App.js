import "./App.css";
import { Switch, Route } from "react-router-dom";
import ProductList from "./Pages/ProductList/ProductList";
import Home from "./Pages/Home/Home";
import ContactUS from "./Pages/ContactUS/ContactUS";
import Error from "./Pages/Error/Error";
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Navbarr from './Components/Navbar/Navbar.js'
import Smartphone from "./Pages/Category/Smartphone/Smartphone";
import Cart from './Pages/Cart/Cart'
import Computers from "./Pages/Category/Computers/Computers";
import Tablettes  from "./Pages/Category/Tablettes/Tablettes";
import Printers from "./Pages/Category/Printers/Printers";
import ListeCart from "./Pages/Liste/ListeCart/ListeCart";

function App() {
  return (
    <div className="App">
         <Navbarr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Product" component={ProductList} />
        <Route path="/ContactUS" component={ContactUS} />
        <Route path="/Smartphone" component={Smartphone} />
        <Route path="/Computers" component={Computers} />
        <Route path="/Tablettes" component={Tablettes} />
        <Route path="/Printers" component={Printers} />
        <Route path="/login" component={Login} />
        <Route path="/CreateAccount" component={Register} />
        <Route path="/cart" component={Cart} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
