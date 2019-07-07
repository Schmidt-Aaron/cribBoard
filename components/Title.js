import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Title = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cribbage Board</Text>
      <TouchableOpacity style={styles.resetButton} onPress={props.resetGame}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 200,
    flex: 1,
    backgroundColor: "#ff0",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  resetButton: {
    position: "absolute",
    top: 20,
    right: 30
  }
});

export default Title;
