import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import SinglePlayer from "./SinglePlayer";

// maps over props.players for each player
const Players = props => {
  return (
    <View style={styles.container}>
      {props.playerArr.map(player => {
        return (
          <SinglePlayer
            key={player}
            history={props.history[player]}
            points={props.scores[player]}
            name={props.playerNames[player]}
            player={player}
            undo={props.undoLastScore}
            changeName={props.changeName}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2, // change to 4 for 3-4 players
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "flex-start",
    justifyContent: "center"
    // flexDirection: "row" // column for horizontal screens
  },
  background: {
    height: "100%",
    width: "100%"
  }
});

export default Players;
