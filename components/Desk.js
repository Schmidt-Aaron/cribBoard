import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Players from "./Players";
import Board from "./Board";

const Desk = props => {
  return (
    <View style={styles.container}>
      <Players {...props} />
      <Board {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
    flexDirection: "row"
  }
});

export default Desk;
