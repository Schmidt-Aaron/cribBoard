import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import SinglePlayer from "./SinglePlayer";
import background3 from "../assets/antique-backdrop1.jpg"

// maps over props.players for each player
const Players = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background3}
        style={styles.background}
      >
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
        </ImageBackground>
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
  },
  background: {
    height:  '100%',
    width:'100%'
  }
});

export default Players;
