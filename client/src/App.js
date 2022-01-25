import "./App.css";
import { Switch, Route } from "react-router-dom";
import ContactList from "./Pages/ContactList/ContactList";
import Home from "./Pages/Home/Home";
import ContactUS from "./Pages/ContactUS/ContactUS";
import Error from "./Pages/Error/Error";
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Navbarr from './Components/Navbar/Navbar.js'
import AddEditContact from "./Pages/AddEditContact/AddEditContact";

function App() {
  return (
    <div className="App">
         <Navbarr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ContactUS" component={ContactUS} />
        <Route path="/login" component={Login} />
        <Route path="/CreateAccount" component={Register} />
        <Route path="/*" component={Error} />
        <Route
          path={["/addContact", "/editContact/:id"]}
          component={AddEditContact}
        />
      </Switch>
    </div>
  );
}

export default App;
