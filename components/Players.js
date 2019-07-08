import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SinglePlayer from "./SinglePlayer";

// maps over props.players for each player
const Players = props => {
  return (
    <View style={styles.container}>
      {props.playerArr.map(string => {
        return (
          <SinglePlayer
            key={string}
            points={props[`player${string}History`]}
            name={props[`player${string}Name`]}
            player={string}
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
    flex: 7,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
    // flexDirection: "row" // column for horizontal screens
  }
});

export default Players;
