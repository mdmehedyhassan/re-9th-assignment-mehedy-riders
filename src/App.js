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

export const UserContext = createContext();

function App() {
  const [riders, setRiders] = useState([]);
  useEffect(() => {
    setRiders(fakeData)
  }, []);
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
          <Route path="/rider/:riderName">
            <Riders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
