import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SinglePlayer from "./SinglePlayer";

const Players = props => {
  return (
    <View style={styles.container}>
      <SinglePlayer
        points={props.playerOneCurrPoints}
        name={props.playerOneName}
      />
      <SinglePlayer
        points={props.playerTwoCurrPoints}
        name={props.playerTwoName}
      />
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
