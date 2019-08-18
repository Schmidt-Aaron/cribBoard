import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, ImageBackground } from "react-native";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Desk from "./components/Desk";
import background from "./assets/wood-board.jpg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: 2, // does this do anything???
      playerArr: ["One", "Two"],
      activeGame: true,
      currentPlayer: "",
      pointRange: [],
      playerOneName: "Player One",
      playerTwoName: "Player Two",
      playerThreeName: "Player Three",
      playerFourName: "Player Four",
      playerOneScore: 0,
      playerTwoScore: 0,
      playerThreeScore: 0,
      playerFourScore: 0,
      playerOneHistory: [0],
      playerTwoHistory: [0],
      playerThreeHistory: [0],
      playerFourHistory: [0]
    };

    this.updateScore = this.updateScore.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.selectPlayerOne = this.selectPlayerOne.bind(this);
    this.selectPlayerTwo = this.selectPlayerTwo.bind(this);
    this.undoSelect = this.undoSelect.bind(this);
    this.makeRange = this.makeRange.bind(this);
    this.undoLastScore = this.undoLastScore.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeNumberOfPlayers = this.changeNumberOfPlayers.bind(this);
  }

  // change # of players
  changeNumberOfPlayers(number) {
    if (number === 2) {
      this.setState({
        playerArr: ["One", "Two"]
      });
    }
    if (number === 3) {
      this.setState({
        playerArr: ["One", "Two", "Three"]
      });
    }
    if (number === 4) {
      this.setState({
        playerArr: ["One", "Two", "Three", "Four"]
      });
    }
  }
  // change game length
  // change peg color

  changeName(player, name) {
    let string = `player${player}Name`;
    this.setState({
      [string]: name
    });
  }

  currentPoints(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }

  updateScore(player, points) {
    if (this.state.activeGame === true) {
      let historyString = `player${player}History`;
      let scoreString = `player${player}Score`;
      let tempArr = this.state[historyString];
      tempArr.push(points);
      let tempPoints = this.currentPoints(tempArr);
      if (tempPoints >= 121) {
        tempPoints = 121;
        this.setState({
          [historyString]: tempArr,
          [scoreString]: tempPoints,
          activeGame: false
        });
      }
      if (tempPoints < 121) {
        this.setState({
          [historyString]: tempArr,
          [scoreString]: tempPoints
        });
      }
    }
  }

  resetGame() {
    this.setState({
      activeGame: true,
      pointRange: [],
      currentPlayer: "",
      playerOneScore: 0,
      playerTwoScore: 0,
      playerThreeScore: 0,
      playerFourScore: 0,
      playerOneHistory: [],
      playerTwoHistory: [],
      playerThreeHistory: [],
      playerFourHistory: []
    });
  }

  selectPlayerOne() {
    this.setState({
      currentPlayer: "One"
    });
    console.log("player One selected");
  }

  selectPlayerTwo() {
    this.setState({
      currentPlayer: "Two"
    });
    console.log("player Two selected");
  }

  undoSelect() {
    this.setState({
      currentPlayer: "",
      pointRange: []
    });
  }

  makeRange(start, end, player) {
    let range = [];
    for (let n = start; n <= end; n++) {
      range.push(n);
    }
    this.setState({
      pointRange: range,
      currentPlayer: player
    });
  }

  undoLastScore(player) {
    if (this.state.activeGame === true) {
      let historyString = `player${player}History`;
      let playerHistory = this.state[historyString];
      let scoreString = `player${player}Score`;
      playerHistory.pop();
      console.log(playerHistory);
      let newScore = this.currentPoints(playerHistory);
      this.setState({
        [historyString]: playerHistory,
        [scoreString]: newScore
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background}>
          <Title
            resetGame={this.resetGame}
            {...this.state}
            changeNumberOfPlayers={this.changeNumberOfPlayers}
            changeName={this.changeName}
          />

          <Desk
            {...this.state}
            changeName={this.changeName}
            undoLastScore={this.undoLastScore}
          />
          <Menu
            {...this.state}
            updateScore={this.updateScore}
            resetGame={this.resetGame}
            selectPlayerOne={this.selectPlayerOne}
            selectPlayerTwo={this.selectPlayerTwo}
            undoSelect={this.undoSelect}
            makeRange={this.makeRange}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#fff"
  },
  background: {
    height: "100%",
    width: "100%"
  }
});
// ?
// AppRegistry.registerComponent("App", () => App);
