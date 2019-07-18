import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PointSelector from "./PointSelector";

const Menu = props => {
  return (
    <View style={styles.menu}>
      <PointSelector {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "rgba(110,110,110,0.8)",
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Menu;
