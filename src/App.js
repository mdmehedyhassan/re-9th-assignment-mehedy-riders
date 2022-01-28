import { createContext, useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import { fakeData } from './FakeData/FakeData';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import Riders from './component/Riders/Riders';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import NotMatch from './component/NotMatch/NotMatch';

export const UserContext = createContext();

function App() {
  const [riders, setRiders] = useState({});
  return (
    <UserContext.Provider value={[riders, setRiders]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/rider/:riderName">
            <Riders />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
