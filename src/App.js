import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Stops from "./pages/Stops";
import Login from "./pages/Login";

export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/classes">Classes</Link>
              </li>
              <li>
                <Link to="/stops">Pit Stops</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/classes" component={Classes} />
            <Route path="/stops" component={Stops} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
  );
}
