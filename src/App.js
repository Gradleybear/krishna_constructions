import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxeWzaeScHwxpGe5YCk_bRZOWpJj2PV2I",
  authDomain: "krishnaconstructions-5f903.firebaseapp.com",
  projectId: "krishnaconstructions-5f903",
  storageBucket: "krishnaconstructions-5f903.appspot.com",
  messagingSenderId: "240122331061",
  appId: "1:240122331061:web:94f6fd8973d5c2cf7663fc",
  measurementId: "G-RLGSG65BE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
