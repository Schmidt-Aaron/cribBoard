import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import OptionsModal from "./OptionsModal";

const Title = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cribbage Board</Text>
      <TouchableOpacity style={styles.resetButton} onPress={props.resetGame}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <OptionsModal {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 200,
    flex: 1,
    backgroundColor: "rgba(110,110,110,0.8)",
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
