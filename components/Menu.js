import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Menu = props => {
  return (
    <View style={styles.menu}>
      <Text>Menu Goes Here</Text>
      <Button
        title="update Score"
        onPress={() => props.updateScore("One", 10)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "blue",
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Menu;
