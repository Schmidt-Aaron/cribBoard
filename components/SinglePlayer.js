import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

// Single player component
const SinglePlayer = props => {

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

  return (
    <View style={styles.container}>
      <View style={styles.playerNameContainer}>
        <TextInput
          style={styles.playerName}
          // onSubmitEditing={text => props.changeName(props.player, text)}
          onChangeText={text => props.changeName(props.player, text)}
          value={props.name}
        />
      </View>
      <View style={styles.scores}>
        <Text style={styles.points}>{currentPoints(props.points)}</Text>
        <Text>{previousScore(props.points)}</Text>
      </View>
      <View style={styles.playerMenu}>
        <Button
          title="Undo"
          onPress={() => {
            props.undo(props.player);
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
    width: 200,
    justifyContent: "center",
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
    fontSize: 30,
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
