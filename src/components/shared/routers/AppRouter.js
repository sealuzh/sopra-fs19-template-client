import React from "react";
import styled from "styled-components";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Game from "../../game/Game";
import { GameGuard } from "../guards/GameGuard";
import GameRouter from "./GameRouter";
import { LoginGuard } from "../guards/LoginGuard";
import Login from "../../login/Login";

const Container = styled.div``;

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Container>
            <Route
              path="/game"
              render={() => (
                <GameGuard>
                  <GameRouter base={"/game"} />
                </GameGuard>
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
            <Route path="/" exact render={() => <Redirect to={"/game"} />} />
          </Container>
        </Switch>
      </BrowserRouter>
    );
  }
}
/*
* Don't forget to export your component!
 */
export default AppRouter;
