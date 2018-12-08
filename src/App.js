import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./views/Header";
import GameRouter from "./components/shared/routers/GameRouter";
import { GameGuard } from "./components/shared/guards/GameGuard";
import { LoginGuard } from "./components/shared/guards/LoginGuard";
import Login from "./components/login/Login";
import AppRouter from "./components/shared/routers/AppRouter";

const Body = styled.div``;

class App extends Component {
  render() {
    return (
      <div>
        <Header height={"100"} />
        <AppRouter />
      </div>
    );
  }
}

export default App;
