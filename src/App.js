import React from 'react';
 import Header from './components/Header/header'
import './App.css';
import Shop from './components/shop/shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
 import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
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
           <Route path="*">
            <Notfound></Notfound>
           </Route>
         </Switch>
       </Router>
         
          
    </div>
  );
}
 
export default App;
