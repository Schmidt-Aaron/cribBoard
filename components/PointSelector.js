import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class PointSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: "",
      points: 0,
      pointRange: []
    };

    this.selectPlayerOne = this.selectPlayerOne.bind(this);
    this.selectPlayerTwo = this.selectPlayerTwo.bind(this);
    this.undoSelect = this.undoSelect.bind(this);
    this.makeRange = this.makeRange.bind(this);
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
    // return (
    //   <View style={styles.pointsContainer}>
    //     {range.map(n => (
    //       <TouchableOpacity
    //         key={n}
    //         style={styles.point}
    //         onPress={() => console.log(n)}
    //       >
    //         <Text>{n}</Text>
    //       </TouchableOpacity>
    //     ))}
    //   </View>
    // );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.playerSelectContainer}>
          <TouchableOpacity
            style={styles.playerSelectArea}
            onPress={this.selectPlayerOne}
          >
            <Text>Select Player One</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.playerSelectArea}
            onPress={this.undoSelect}
          >
            <Text>Undo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.playerSelectArea}
            onPress={this.selectPlayerTwo}
          >
            <Text>Select Player Two </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pointSelectContainer}>
          <TouchableOpacity
            style={styles.pointRange}
            onPress={() => this.makeRange(1, 10)}
          >
            <Text>1-10</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pointRange}
            onPress={() => this.makeRange(11, 20)}
          >
            <Text>11-20</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pointRange}
            onPress={() => this.makeRange(21, 29)}
          >
            <Text>21-29</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pointsContainer}>
          {this.state.pointRange.length > 0
            ? this.state.pointRange.map(n => (
                <TouchableOpacity
                  key={n}
                  style={styles.point}
                  onPress={() =>
                    this.props.updateScore(this.state.currentPlayer, n)
                  }
                >
                  <Text>{n}</Text>
                </TouchableOpacity>
              ))
            : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  playerSelectContainer: {
    flex: 1,
    flexDirection: "row"
  },
  playerSelectArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  pointSelectContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  pointRange: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  pointsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  point: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 5,
    paddingRight: 5
  }
});

export default PointSelector;
