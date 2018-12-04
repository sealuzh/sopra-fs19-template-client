import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./views/Header";
import AppRouter from "./components/Routers/AppRouter";

const Body = styled.div``;

class App extends Component {
  render() {
    return (
      <div>
        <Header background={"rgba(26, 113, 177, 1)"} />
        <BrowserRouter>
          <Switch>
            <Body>
              <Route path="/app" render={() => <AppRouter base={"/app"} />} />
              <Route
                path="/login"
                exact
                render={() => <div>asfjosfjoasjofasjofjaosf</div>}
              />
              <Route
                path="/"
                exact
                render={() => <div>asfjosfjoasjofasjofjaosf</div>}
              />
            </Body>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
