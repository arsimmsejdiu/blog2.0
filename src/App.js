import React from "react";
import "./assets/scss/base.scss";
import Navigation from "./components/navigation";
import PageNotFound from "./components/PageNotFouns";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PageRenderer from "./data/Page-Renderer";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Navigation />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home"/>} />
          <Route component={() => <PageNotFound />}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
