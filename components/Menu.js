import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PointSelector from "./PointSelector";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: "",
      points: 0
    };
  }

  render() {
    return (
      <View style={styles.menu}>
        <PointSelector updateScore={this.props.updateScore} />
        {/* <Button
          title="update Score"
          onPress={() => this.props.updateScore("One", 10)}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "azure",
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Menu;
