import React from "react";
import styled from "styled-components";
import { BaseContainer } from "../../helpers/layout";
import { getDomain } from "../../helpers/getDomain";
import Player from "../../views/Player";
import { Spinner } from "../../views/Spinner";

const Container = styled(BaseContainer)`
  color: white;
  text-align: center;
`;

const Users = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PlayerContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null
    };
  }

  componentDidMount() {
    fetch(`${getDomain()}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(async users => {
        // delays continuous execution of an async operation for 0.8 seconds.
        // fake async call, so that the spinner can be displayed
        await new Promise(resolve => setTimeout(resolve, 800));
        this.setState({ users });
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong fetching the users: " + err);
      });
  }

  render() {
    return (
      <Container>
        <h2>Happy Coding! {} </h2>
        <p>Get all users from secure and point:</p>
        {!this.state.users ? (
          <Spinner />
        ) : (
          <Users>
            {this.state.users.map((user, i) => {
              return (
                <PlayerContainer key={i}>
                  <Player user={user} />
                </PlayerContainer>
              );
            })}
          </Users>
        )}
      </Container>
    );
  }
}

export default Game;
