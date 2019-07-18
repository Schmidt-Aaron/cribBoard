import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, ImageBackground } from "react-native";
import Title from "./components/Title";
import Players from "./components/Players";
import Menu from "./components/Menu";
import background from "./assets/wood-board.jpg"


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
      playerFourHistory: [0],
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

  currentPoints(arr) {
    return arr.reduce((a, b) => a + b, 0);
  };

  updateScore(player, points) {
    if(this.state.activeGame === true) {
      let historyString = `player${player}History`;
      let scoreString = `player${player}Score`;
      let tempArr = this.state[historyString];
      tempArr.push(points);
      let tempPoints = this.currentPoints(tempArr);
      if(tempPoints >= 121) {
        tempPoints = 121;
        this.setState({
          [historyString]: tempArr,
          [scoreString]: tempPoints,
          activeGame: false
        });
      }
      if(tempPoints < 121) {
        this.setState({
          [historyString]: tempArr,
          [scoreString]: tempPoints,
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
      pointRange: [],
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
    let string = `player${player}History`;
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
        <ImageBackground
          source={background}
        style={styles.background}
        >
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

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff"
  },
  background: {
    height:  '100%',
    width:'100%'
  }
});
// ?
// AppRegistry.registerComponent("App", () => App);
