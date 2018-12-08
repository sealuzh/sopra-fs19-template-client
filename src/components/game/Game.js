import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

class Game extends React.Component {
  render() {
    return <Container>You are logged in!</Container>;
  }
}

export default Game;
