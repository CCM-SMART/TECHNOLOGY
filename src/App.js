import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Amazfit from './components/Screens/Amazfit';
import smart from './components/pages/Smart';

function App() {
  return (
    <>
      <div>
          <Router>
            <Navbar />
            <Switch>
              <Route path='/home' exact component={Home} />
              <Route path='/services' component={Services} />
              <Route path='/products' component={Products} />
              <Route path='/sign-up' component={SignUp} />
              <Route path='/amazfit' component={Amazfit} />
              <Route path='/smart' component={smart} />

            </Switch>
          </Router>
      </div>
    </>
  );
}

export default App;