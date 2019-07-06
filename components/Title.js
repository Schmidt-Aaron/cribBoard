import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cribbage Board</Text>
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
  }
});

export default Title;
