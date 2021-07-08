import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Error from './components/pages/Error';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import UserState from './context/user/UserState';

const App = () => {
  return (
    <UserState>
      <Header />
      <div className="main-panel">
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/about" exact component={About} />
            <Route component={Error} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </UserState>
  );
};

export default App;
