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
      playerOneName: "Player One",
      playerOneCurrPoints: 45,
      playerOnePrevPoints: 41,
      playerOnehistory: [],
      playerTwoName: "Player Two",
      playerTwoCurrPoints: 66,
      playerTwoPrevPoints: 60,
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
    console.log(currStateString, currPoints);
    console.log("update score");
    this.setState({
      [currStateString]: (currPoints += points)
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Title />
        <Players {...this.state} />
        <Menu updateScore={this.updateScore} />
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
