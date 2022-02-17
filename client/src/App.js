import "./App.css";
import React, { useEffect } from 'react'
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
import Tablettes from "./Pages/Category/Tablettes/Tablettes";
import Printers from "./Pages/Category/Printers/Printers";
import ListeCart from "./Pages/Liste/ListeCart/ListeCart";
import Homeadmin from "./Pages/Admin/HomeAdmin/Homeadmin";
import Order from "./Pages/Admin/Order/Order";
import Footer from "./Components/Footer/Footer";
import Profile from "./Pages/Profile/Profile";
import AddProduct from "./Pages/Admin/AddProduct/AddProduct";
import ListeComputers from "./Pages/Liste/ListeCategory/ListeComputers";
import ListePrinters from "./Pages/Liste/ListeCategory/ListePrinters";
import ListeSmartphone from "./Pages/Liste/ListeCategory/ListeSmartphone";
import ListeTablettes from "./Pages/Liste/ListeCategory/ListeTablettes";
import Filiter from "./Components/Filter/Filter";
import DetailsProduct from "./Pages/DetailsProduct/DetailsProduct";
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser } from './JS/Actions/authActions';
import EditUser from "./Components/Auth/EditUser";
import Invoice from './Pages/Invoice/Invoice';
import EditProduct from "./Pages/Admin/EditProduct/EditProduct";
import PrivateRoute from "./Router/PrivateRoute";
import ListeAdminComputers from './Pages/Admin/ListeAdminCategory/ListeAdminComputers';
import ListeAdminPrinters from './Pages/Admin/ListeAdminCategory/ListeAdminPrinters';
import ListeAdminSmartphone from './Pages/Admin/ListeAdminCategory/ListeAdminSmartphone';
import ListeAdminTablettes from './Pages/Admin/ListeAdminCategory/ListeAdminTablettes';
function App() {

  const token = localStorage.getItem('token')

  const dispatch = useDispatch()

  useEffect(() => {
    token &&
      dispatch(getAuthUser())
  }, [dispatch, token]);


  return (
    <div className="App">
      <Navbarr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Product" component={ProductList} />
        <Route path="/Filiter" component={Filiter} />
        <Route path="/Profile/:id" component={EditUser} />
        <Route path="/ContactUS" component={ContactUS} />
        <Route path="/Smartphone" component={ListeSmartphone} />
        <Route path="/Computers" component={ListeComputers} />
        <Route path="/Tablettes" component={ListeTablettes} />
        <Route path="/Printers" component={ListePrinters} />
        <Route path="/AdminSmartphone" component={ListeAdminSmartphone} />
        <Route path="/AdminComputers" component={ListeAdminComputers} />
        <Route path="/AdminTablettes" component={ListeAdminTablettes} />
        <Route path="/AdminPrinters" component={ListeAdminPrinters} />
        <Route path="/Order" component={Order} />
        <Route path="/AddProduct" component={AddProduct} />
        <Route path="/EditProduct/:id" component={EditProduct} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/Homeadmin" component={Homeadmin} />
        <Route path="/login" component={Login} />
        <Route path="/CreateAccount" component={Register} />
        <Route path="/cart/:id" component={Cart} />
        <Route path="/Invoice/:id" component={Invoice} />
        <Route path="/DetailsProduct/:id" component={DetailsProduct} />
        <Route path="/ListeCart" component={ListeCart} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
