import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// Single player component
const SinglePlayer = props => {
  console.log(props.points);

  const currentPoints = arr => {
    return arr.reduce((a, b) => a + b, 0);
  };

  // removes last element from score array than returns sum
  const previousScore = arr => {
    let sum = 0;
    arr.map((n, i) => {
      if (i < arr.length - 1) {
        sum += +n;
      }
    });
    return sum;
  };

  console.log(`prev: ${previousScore(props.points)}`);

  return (
    <View style={styles.container}>
      <View style={styles.playerNameContainer}>
        <Text style={styles.playerName}>{props.name}</Text>
      </View>
      <View style={styles.scores}>
        <Text style={styles.points}>{currentPoints(props.points)}</Text>
        <Text>{previousScore(props.points)}</Text>
      </View>
      <View style={styles.playerMenu}>
        <Button
          title="Undo"
          onPress={() => {
            this.props.updateScore;
          }}
          accessibilityLabel="Undo the last score"
          style={styles.menuButton}
        />
        <Button
          onPress={() => {}}
          title="History"
          accessibilityLabel="See the scoring history for this player"
          style={styles.menuButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1
  },
  playerName: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center"
  },
  scores: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  points: {
    fontSize: 120,
    textAlign: "center"
  },
  playerMenu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 10
  },
  menuButton: {
    width: "50%"
  }
});

export default SinglePlayer;
