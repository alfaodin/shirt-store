import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignPage from './pages/sign/sign.page';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import NavHeader from './components/nav-header/nav-header.component';

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signin' component={SignPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
