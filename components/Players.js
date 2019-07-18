import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import SinglePlayer from "./SinglePlayer";

// maps over props.players for each player
const Players = props => {
  return (
    <View style={styles.container}>
      {props.playerArr.map(string => {
        return (
          <SinglePlayer
            key={string}
            history={props[`player${string}History`]}
            points={props[`player${string}Score`]}
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
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "center",
    justifyContent: "center"
    // flexDirection: "row" // column for horizontal screens
  },
  background: {
    height:  '100%',
    width:'100%'
  }
});

export default Players;
