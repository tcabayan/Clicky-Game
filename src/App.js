import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import friends from "./friends.json";
import "./App.css";
import Message from "./components/Message";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    gameOver: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      gameOver: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    if (newScore === friends.length) {
      console.log("You won!");
      this.setState({ gameOver: "You won the election! Payton would be so proud!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      gameOver: "OHHH NO! You lost the election! Click on any card to restart the game.",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="The Politician Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />

        <Title>
          Take your chance to hang out with the crew from "The Politician" but click on any character more than once and the election will be lost! 
        </Title>

        <Container>
            {this.state.friends.map(friend => (
              <div className="card-container" key={friend.id}>
                <FriendCard
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                  />
              </div>
            ))}
        </Container>

        <Message
          gameOver={this.state.gameOver}
        />
      </Wrapper>
    );
  }
}

export default App;