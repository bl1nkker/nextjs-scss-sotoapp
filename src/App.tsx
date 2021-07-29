import React from "react";
import { Switch, Route } from "react-router-dom";
import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { OnlineHelpers } from "./components/OnlineHelpers";
import "./css/style.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contacts" exact component={Contacts} />
      </Switch>
      <OnlineHelpers />
    </div>
  );
}

export default App;
