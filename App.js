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
      activeGame: true,
      currentPlayer: "",
      pointRange: [],
      playerOneName: "Player One",
      playerOneCurrPoints: 0,
      playerOnePrevPoints: 0,
      playerOnehistory: [],
      playerTwoName: "Player Two",
      playerTwoCurrPoints: 0,
      playerTwoPrevPoints: 0,
      playerTwohistory: [],
      playerThreeName: "Player Three",
      playerThreeCurrPoints: 0,
      playerThreePrevPoints: 0,
      playerThreehistory: [],
      playerFourName: "Player Four",
      playerFourCurrPoints: 0,
      playerFourPrevPoints: 0,
      playerFourhistory: []
    };

    this.updateScore = this.updateScore.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.selectPlayerOne = this.selectPlayerOne.bind(this);
    this.selectPlayerTwo = this.selectPlayerTwo.bind(this);
    this.undoSelect = this.undoSelect.bind(this);
    this.makeRange = this.makeRange.bind(this);
  }

  /*
   * update player scores
   * @ player = One, Two, Three, Four
   * @ number = 1 - 29 (not 19)
   * TODO: error handling for player #
   */
  updateScore(playerNum, points) {
    let currStateString = `player${playerNum}CurrPoints`;
    let prevStateString = `player${playerNum}PrevPoints`;
    let currPoints = this.state[currStateString];
    let prevPoints = this.state[prevStateString];
    if (this.state.activeGame === true) {
      if (currPoints + points > 121) {
        this.setState({
          [currStateString]: 121,
          activeGame: false,
          currentPlayer: "",
          pointRange: []
        });
      } else {
        this.setState({
          [currStateString]: (currPoints += points),
          currentPlayer: "",
          pointRange: []
        });
      }
    }
  }

  resetGame() {
    this.setState({
      activeGame: true,
      pointRange: [],
      currentPlayer: "",
      playerOneCurrPoints: 0,
      playerOnePrevPoints: 0,
      playerOnehistory: [],
      playerTwoCurrPoints: 0,
      playerTwoPrevPoints: 0,
      playerTwohistory: [],
      playerThreeCurrPoints: 0,
      playerThreePrevPoints: 0,
      playerThreehistory: [],
      playerFourCurrPoints: 0,
      playerFourPrevPoints: 0,
      playerFourhistory: []
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

  render() {
    return (
      <View style={styles.container}>
        <Title resetGame={this.resetGame} />
        <Players {...this.state} />
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
