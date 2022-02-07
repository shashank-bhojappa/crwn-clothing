import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils'

class App extends React.Component {
constructor() {
  super();

  this.state = {
    currentUser: null
  }
}

componentDidMount() {
  auth.onAuthStateChanged(user => {
    this.setState({currentUser: user});

    console.log(user);
  });
}

  render() {
    return (
      <div>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/signin' element={<SignInAndSignUpPage/>} />
        </Routes>    
      </div>
    );
  }
  
}

export default App;
