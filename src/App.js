import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import ProductDetail from './components/ProductDetail/ProductDetail';
import NotFound from './components/NotFound/NotFound';
import LogIn from './components/LogIn/LogIn';

import { AuthContextProvider, PrivateRoute } from './components/LogIn/useAuth';
import Shipment from './components/Shipment/Shipment';



function App() {
  const user = {name:'koduMia', email: 'kodumia@gml.com'}
  return (
    <div >
      <AuthContextProvider>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
          <Route path="/inventory">
              <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path='/logIn'>
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path='/shipment'>
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          
          </Switch>
        </Router>
        </AuthContextProvider>
   
    </div>
  );
}

export default App;
