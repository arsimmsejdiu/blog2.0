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
import TopNavigation from "./components/top.navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavigation />
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
