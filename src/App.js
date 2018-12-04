import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./views/Header";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Header background={"rgba(26, 113, 177, 1)"} />
            <Route
              path="/metamask"
              exact
              render={() => <div>asfjosfjoasjofasjofjaosf</div>}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
