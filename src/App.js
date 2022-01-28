import { createContext, useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
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
import Profile from './component/Profile/Profile';
import Destination from './component/Destination/Destination';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';

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
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/destination">
            <Destination />
          </PrivateRoute>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
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
