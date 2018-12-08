import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./views/Header";
import AppRouter from "./components/shared/routers/AppRouter";
import { AppGuard } from "./components/shared/guards/AppGuard";
import { LoginGuard } from "./components/shared/guards/LoginGuard";
import Login from "./components/login/Login";

const Body = styled.div``;

class App extends Component {
  render() {
    return (
      <div>
        <Header height={"100"} />
        <BrowserRouter>
          <Switch>
            <Body>
              <Route
                path="/app"
                render={() => (
                  <AppGuard isAuth={false}>
                    <AppRouter base={"/app"} />{" "}
                  </AppGuard>
                )}
              />
              <Route
                path="/login"
                exact
                render={() => (
                  <LoginGuard isAuth={false}>
                    <Login />
                  </LoginGuard>
                )}
              />
              {/*Per default, Redirect to Login*/}
              <Route path="/" exact render={() => <Redirect to={"/login"} />} />
            </Body>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
