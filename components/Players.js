import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SinglePlayer from "./SinglePlayer";

// maps over props.players for each player
const Players = props => {
  return (
    <View style={styles.container}>
      {/* <SinglePlayer
        // points={props.playerOneCurrPoints}
        points={props.playerOneHistory}
        name={props.playerOneName}
        undo={props.undoLastScore}
      />
      <SinglePlayer
        // points={props.playerTwoCurrPoints}
        points={props.playerTwoHistory}
        name={props.playerTwoName}
      /> */}
      {props.playerArr.map(string => {
        return (
          <SinglePlayer
            key={string}
            points={props[`player${string}History`]}
            name={props[`player${string}Name`]}
            player={string}
            undo={props.undoLastScore}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
    // flexDirection: "row" // column for horizontal screens
  }
});

export default Players;
