import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Dashboard from './components/dashboard/Dashboard';
import Error from './components/pages/Error';
import Landing from './components/pages/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AlertState from './context/alert/AlertState';
import PrivateRoute from './components/routing/PrivateRoute';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import Setup from './components/setup/Setup';
import AppState from './context/app/AppState';
import StudentState from './context/student/StudentState';

if (localStorage.accessToken) setAuthToken(localStorage.accessToken);

const App = () => {
  return (
    <AuthState>
      <AppState>
        <StudentState>
          <AlertState>
            <Router>
              <Header />
              <div className="main-panel">
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/setup" component={Setup} />
                  <Route component={Error} />
                </Switch>
                <Footer />
              </div>
            </Router>
          </AlertState>
        </StudentState>
      </AppState>
    </AuthState>
  );
};

export default App;
