import React from "react";
import { View, Text, StyleSheet } from "react-native";

// hole element
const Hole = props => {
  return (
    <View
      player={props.player}
      point={props.point}
      style={styles.holeContainer}
    >
      <View style={styles.hole} />
    </View>
  );
};

// spacer between sets of 5 holes
const HoleSpace = () => {
  return (
    <View 
      style={styles.holeContainer}
    >
    </View>
  );
};

// starting holes
const startingHole = props => {
  return (
    <View
      player={props.player}
      point={props.point}
      style={styles.holeContainer}
    >
      <View style={styles.hole} />
    </View>
  );
};

// generates a row of pegs
const RowOfPegs = props => {
  let start = props.start || 1; // temp
  let finish = props.finish || 40; // temp
  let spacerNum = 1; // used as a key value for our spacers
  let firstRow = null; // toggle for row specific holes
  let finalRow = null; // toggle for row specific holes
  let rowArray = [];

  for (let i = start; i <= finish; i++) {
    // adds spacers after every 5 holes
    if((i - 1) % 5 === 0 ) {
      rowArray.push(
        <HoleSpace key={`space_${spacerNum}`} />
      )
      spacerNum++ // increment our key value 
    }
    rowArray.push(
      <Hole key={`${props.player}_${i}`} player={props.player} point={i} />
    );
  }

  return (
    <View style={styles.playerRow}>
      {rowArray}
    </View>
  );
};

// fairly complex layout; perhaps find a way to componentize the individual pieces??
const Board = props => {
  const players = ["One", "Two"]; // add "Three" and "Four" to add players. use EXACT spelling
  return (
    <View style={styles.container}>
      {/* contains the entire crib board */}
      <View style={styles.boardContainer}>
        
        {/*  one of three rows of the board (for 121 pt game) */}
        <View style={styles.topRowContainer}>

          {/* container for the individual rows; contains two spacer elements + a player rows element; flexDirection row */}
          <View style={styles.row}>
            
            {/* spacer used for starting / final pegs / misc */}
            <View style={styles.rowSpacer} />
            
            {/* houses all the point row elements; flexdirection: column */}
            <View style={styles.pointRowsContainer}>
            
              {/* this function will populate the peg areas with rows based on how many players are passed into this component */}
              {players.map(player => (
                <RowOfPegs
                key={player}
                player={player}
                start={1}
                finish={40}
                firstRow={true}
                finalRow={false}
                />
                ))}

            </View>
            <View style={styles.rowSpacer} />
          </View>
        </View>

        {/*  one of three rows of the board (for 121 pt game) */}
        <View style={styles.middleRowContainer}>

          {/* container for the individual rows; contains two spacer elements + a player rows element; flexDirection row */}
          <View style={styles.row}>
            
            {/* spacer used for starting / final pegs / misc */}
            <View style={styles.rowSpacer} />
            
            {/* houses all the point row elements; flexdirection: column */}
            <View style={styles.pointRowsContainer}>
            
              {/* this function will populate the peg areas with rows based on how many players are passed into this component */}
              {players.map(player => (
                <RowOfPegs
                key={player}
                player={player}
                start={41}
                finish={80}
                firstRow={false}
                finalRow={false}
                />
              ))}

            </View>
            <View style={styles.rowSpacer} />
          </View>
        </View>
        {/*  one of three rows of the board (for 121 pt game) */}
        <View style={styles.bottomRowContainer}>

          {/* container for the individual rows; contains two spacer elements + a player rows element; flexDirection row */}
          <View style={styles.row}>
            
            {/* spacer used for starting / final pegs / misc */}
            <View style={styles.rowSpacer} />
            
            {/* houses all the point row elements; flexdirection: column */}
            <View style={styles.pointRowsContainer}>
            
              {/* this function will populate the peg areas with rows based on how many players are passed into this component */}
              {players.map(player => (
                <RowOfPegs
                key={player}
                player={player}
                start={81}
                finish={120}
                firstRow={false}
                finalRow={true}
              />
                ))}

            </View>
            <View style={styles.rowSpacer} />
          </View>
        </View>


        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8, // change to 6 for 3-4 players
    justifyContent: "center",
    alignItems: "center"
  },
  boardContainer: {
    flex: 1,
    maxHeight: "80%",
    maxWidth: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2, // for layout development; delete later
    borderColor: "black" // for layout development; delete later
  },
  topRowContainer: {
    flex: 1,
    borderWidth: 0.2, // for layout development; delete later
    borderColor: "black", // for layout development; delete later
    justifyContent: "flex-end"
  },
  middleRowContainer: {
    flex: 1,
    borderWidth: 0.2, // for layout development; delete later
    borderColor: "black", // for layout development; delete later
    justifyContent: "center"
  },
  bottomRowContainer: {
    flex: 1,
    borderWidth: 0.2, // for layout development; delete later
    borderColor: "black", // for layout development; delete later
    justifyContent: "flex-start"
  },
  // row elements 
  row: {
    display: "flex",
    flexBasis: "70%", // controls the player row element height
    flexDirection:"row",
    alignSelf:"center",
    borderWidth: 0.2, // for layout development; delete later
    borderColor: "blue" // for layout development; delete later
  },
  // inside each row we have | rowSpacer | pointRowsContainer | rowSpacer |
  rowSpacer: {
    flex: 1, // 5%
    borderWidth: 0.2, // for layout development; delete later
    borderColor: "white" // for layout development; delete later
  },
  pointRowsContainer: {
    flex: 18, // 90%
    flexDirection:"column",

  },
  // start player row styles
  playerRow: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  holeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  startHole: {
    color: "red",
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center"
  },
  hole: {
    height: 3,
    width: 3,
    borderColor: "black",
    borderRadius: 50,
    backgroundColor: "black"
  },

});

export default Board;
