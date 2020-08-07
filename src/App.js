import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import NavHeader from './components/nav-header/nav-header.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>

      </Switch>
    </div>
  );
}

export default App;
