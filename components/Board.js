import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Hole = props => {
  return (
    <View
      player={props.player}
      point={props.point}
      style={styles.holeContainer}
    >
      <View style={styles.hole} />
    </View>
  );
};

const PointRow = props => {
  let start = props.start || 1; // temp
  let finish = props.finish || 40; // temp
  let player = props.player || "One";
  let firstRow = null;
  let rowArray = [];

  for (let i = start; i <= finish; i++) {
    rowArray.push(
      <Hole key={`${props.player}_${i}`} player={props.player} point={i} />
    );
  }

  return (
    <View style={styles.playerRow}>
      <View style={styles.spacer}>
        {props.firstRow ? (
          <Text style={styles.startHole}>.</Text>
        ) : (
          <Text style={styles.startHole}> </Text>
        )}
      </View>
      {rowArray}
      <View style={styles.spacer} />
    </View>
  );
};

const Board = props => {
  const players = ["One", "Two"];
  return (
    <View style={styles.container}>
      <View style={styles.boardContainer}>
        <View style={styles.topRow}>
          <View style={styles.playerRowContainer}>
            {players.map(player => (
              <PointRow
                key={player}
                player={player}
                start={1}
                finish={40}
                firstRow={true}
              />
            ))}
          </View>
        </View>
        <View style={styles.middleRow}>
          {players.map(player => (
            <PointRow
              key={player}
              player={player}
              start={41}
              finish={80}
              firstRow={false}
            />
          ))}
        </View>
        <View style={styles.bottomRow}>
          {players.map(player => (
            <PointRow
              key={player}
              player={player}
              start={81}
              finish={120}
              firstRow={false}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8, // change to 6 for 3-4 players
    justifyContent: "center",
    alignItems: "center"
  },
  boardContainer: {
    flex: 1,
    maxHeight: "80%",
    maxWidth: "80%",
    justifyContent: "center",
    alignItems: "center"
  },
  topRow: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  middleRow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomRow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  playerRowContainer: {
    alignSelf: "flex-end",
    width: "100%",
    height: "25%"
  },
  // start hole styles
  playerRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  holeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  startHole: {
    color: "red",
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center"
  },
  hole: {
    height: 3,
    width: 3,
    borderColor: "black",
    borderRadius: 50,
    backgroundColor: "black"
  },
  pointRow: {
    flex: 1
  },
  spacer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black"
  }
});

export default Board;
