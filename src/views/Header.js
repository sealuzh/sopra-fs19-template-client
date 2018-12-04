import React from "react";
import styled from "styled-components";
import { ReactLogo } from "../helpers/ReactLogo";

const Container = styled.div`
  height: 100px;
  background: ${props => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  color: white;
`;
/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * https://reactjs.org/docs/components-and-props.html
 * @View
 */
const Header = props => {
  return (
    <Container background={props.background}>
      <Title>SoPra HS19 rocks with React!</Title>
      <ReactLogo width={60} height={60} />
    </Container>
  );
};

export default Header;
