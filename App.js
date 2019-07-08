import React, { Component } from "react";
import { AppRegistry, StyleSheet, View } from "react-native";
import Title from "./components/Title";
import Players from "./components/Players";
import Menu from "./components/Menu";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: 2,
      playerArr: ["One", "Two"],
      activeGame: true,
      currentPlayer: "",
      pointRange: [],
      playerOneName: "Player One",
      playerOneHistory: [0],
      playerTwoName: "Player Two",
      playerTwoHistory: [0],
      playerThreeName: "Player Three",
      playerThreeHistory: [0],
      playerFourName: "Player Four",
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
  }

  changeName(player, name) {
    let string = `player${player}Name`;
    this.setState({
      [string]: name
    });
  }

  updateScore(player, points) {
    let updateString = `player${player}History`;
    console.log(this.state[updateString]);
    let tempArr = this.state[updateString];
    tempArr.push(points);
    console.log(tempArr);
    this.setState({
      [updateString]: tempArr
    });
  }

  resetGame() {
    this.setState({
      activeGame: true,
      pointRange: [],
      currentPlayer: "",
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
      points: 0,
      pointRange: []
    });
    console.log("undo selected");
  }

  makeRange(start, end) {
    let range = [];
    for (let n = start; n <= end; n++) {
      range.push(n);
    }
    this.setState({
      pointRange: range
    });
    console.log(this.state.range);
  }

  undoLastScore(player) {
    let string = `player${player}History`;
    console.log(string);
    let playerHistory = this.state[string];
    playerHistory.pop();
    console.log(playerHistory);
    this.setState({
      [string]: playerHistory
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Title resetGame={this.resetGame} />
        <Players
          {...this.state}
          undoLastScore={this.undoLastScore}
          changeName={this.changeName}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
  }
});
// ?
// AppRegistry.registerComponent("App", () => App);
