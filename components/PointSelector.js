import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PointSelector = props => {
  return (
    <View style={styles.container}>
      <View style={styles.playerSelectContainer}>
        <TouchableOpacity
          style={styles.playerSelectArea}
          onPress={props.selectPlayerOne}
        >
          <Text>{props.playerOneName}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playerSelectArea}
          onPress={props.undoSelect}
        >
          <Text>Undo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playerSelectArea}
          onPress={props.selectPlayerTwo}
        >
          <Text>{props.playerTwoName}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pointSelectContainer}>
        <TouchableOpacity
          style={styles.pointRange}
          onPress={() => props.makeRange(1, 10, 'One')}
        >
          <Text>1-10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pointRange}
          onPress={() => props.makeRange(11, 20, 'One')}
        >
          <Text>11-20</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pointRange}
          onPress={() => props.makeRange(21, 29, 'One')}
        >
          <Text>21-29</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pointRange}
          onPress={() => props.makeRange(1, 10, 'Two')}
        >
          <Text>1-10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pointRange}
          onPress={() => props.makeRange(11, 20, 'Two')}
        >
          <Text>11-20</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pointRange}
          onPress={() => props.makeRange(21, 29, 'Two')}
        >
          <Text>21-29</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pointsContainer}>
        {props.pointRange.length > 0
          ? props.pointRange.map(n => (
              <TouchableOpacity
                key={n}
                style={styles.point}
                onPress={() => {
                  props.updateScore(props.currentPlayer, n);
                }}
              >
                <Text>{n}</Text>
              </TouchableOpacity>
            ))
          : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  playerSelectContainer: {
    flex: 1,
    flexDirection: "row"
  },
  playerSelectArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  pointSelectContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  pointRange: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  pointsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  point: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 5,
    paddingRight: 5
  }
});

export default PointSelector;
