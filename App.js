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
      playerNames: {
        One: "Player One",
        Two: "Player Two",
        Three: "Player Three",
        Four: "Player Four"
      },
      playerOneScore: 0,
      playerTwoScore: 0,
      playerThreeScore: 0,
      playerFourScore: 0,
      scores: {
        One: 0,
        Two: 0,
        Three: 0,
        Four: 0
      },
      history: {
        One: [0],
        Two: [0],
        Three: [0],
        Four: [0]
      },
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
    this.setState({
      playerNames: {
        ...this.state.playerNames,
        [player]: name
      }
    });
  }

  currentScore(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }

  /**
   *
   * @param {String} player: "One" "Two" "Three" "Four"
   * @param {Number} points
   */
  updateScore(player, points) {
    if (this.state.activeGame === true) {
      let tempArr = this.state.history[player];
      tempArr.push(points);
      let tempPoints = this.currentScore(tempArr);
      if (tempPoints >= 121) {
        tempPoints = 121;
        this.setState({
          history: {
            ...this.state.history,
            [player]: tempArr
          },
          scores: {
            ...this.state.scores,
            [player]: tempPoints
          },
          activeGame: false
        });
      }
      if (tempPoints < 121) {
        this.setState({
          history: {
            ...this.state.history,
            [player]: tempArr
          },
          scores: {
            ...this.state.scores,
            [player]: tempPoints
          }
        });
      }
    }
  }

  // Scores back to zero; Names are the same
  resetGame() {
    this.setState({
      activeGame: true,
      pointRange: [],
      currentPlayer: "",

      scores: {
        One: 0,
        Two: 0,
        Three: 0,
        Four: 0
      },
      history: {
        One: [0],
        Two: [0],
        Three: [0],
        Four: [0]
      }
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
      let scoreArr = this.state.history[player];
      scoreArr.pop();
      let updatedScore = this.currentScore(scoreArr);
      this.setState({
        scores: {
          ...this.state.scores,
          [player]: updatedScore
        },
        history: {
          ...this.state.history,
          [player]: scoreArr
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background}>
          <Title
            {...this.state}
            resetGame={this.resetGame}
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
