import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

// Single player component
const SinglePlayer = props => {

  const currentPoints = arr => {
    return arr.reduce((a, b) => a + b, 0);
  };

  // removes last element from score array than returns sum
  const previousScore = arr => {
    let sum = 0;
    arr.map((n, i) => {
      if (i < arr.length - 1) {
        sum += +n;
      }
    });
    return sum;
  };

  return (
    <View style={styles.container}>
      <View style={styles.playerNameContainer}>
        <TextInput
          style={styles.playerName}
          // onSubmitEditing={text => props.changeName(props.player, text)}
          onChangeText={text => props.changeName(props.player, text)}
          value={props.name}
        />
      </View>
      <View style={styles.scores}>
        <Text style={styles.points}>{props.points}</Text>
        <Text>({previousScore(props.history)})</Text>
      </View>
      <View style={styles.playerMenu}>
        <Button
          title="Undo"
          onPress={() => {
            props.undo(props.player);
          }}
          accessibilityLabel="Undo the last score"
        />
        {/* <Button
          onPress={() => {}}
          title="History"
          accessibilityLabel="See the scoring history for this player"
          style={styles.menuButton}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 120,
    height: 120,
    justifyContent: "center",
    backgroundColor:'rgba(52, 52, 52, 0.6)',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    padding:10,
    marginTop:5,
    marginBottom:5,
    marginLeft:10,
    // borderBottomWidth:1,
    // borderTopWidth:1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
  },
  playerName: {
    fontSize: 18,
    textAlign: "center"
  },
  scores: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row'
  },
  points: {
    fontSize: 30,
    textAlign: "center",
    marginRight: 10
  },
  playerMenu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 10
  },
});

export default SinglePlayer;
