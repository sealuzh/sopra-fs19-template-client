import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Dashboard from "../Dashboard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class AppRouter extends React.Component {
  render() {
    /**
     * "this.props.base" is "/app" because as been passed as a prop in the parent of AppRouter, i.e., App.js
     */
    return (
      <Container>
        <Route
          exact
          path={`${this.props.base}/dashboard`}
          render={() => <Dashboard />}
        />
      </Container>
    );
  }
}
/*
* Don't forget to export your component!
 */
export default AppRouter;
