import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet
} from "react-native";

export default class OptionsModal extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.container}>
            <View style={styles.modalContainer}>
              <View style={styles.modalTitle}>
                <Text>Options</Text>
              </View>
              <View style={styles.modalOption}>
                <Text>Hello World!</Text>
              </View>
              <View style={styles.modalOption}>
                <Text>Select Players:</Text>
                <TouchableHighlight
                  onPress={() => {
                    this.props.changeNumberOfPlayers(2);
                  }}
                >
                  <Text>2</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {
                    this.props.changeNumberOfPlayers(3);
                  }}
                >
                  <Text>3</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {
                    this.props.changeNumberOfPlayers(4);
                  }}
                >
                  <Text>4</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.modalOption}>
                <Text>Set Background:</Text>
              </View>
              <View style={styles.modalOption}>
                <Text>Game length:</Text>
              </View>
              <View style={styles.modalOption}>
                <Text>Change Player Names:</Text>
                <TextInput
                  style={styles.playerName}
                  // onSubmitEditing={text => props.changeName(props.player, text)}
                  onChangeText={text => props.changeName(props.player, text)}
                  value={props.name}
                />
              </View>
              <View style={styles.modalOption}>
                <Text>Peg Colors:</Text>
              </View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Options</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  modalContainer: {
    elevation: 2,
    flex: 1,
    width: "95%",
    height: "95%",
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center"
  },
  modalTitle: {
    flex: 1
  },
  modalOption: {
    flex: 1,
    flexDirection: "row"
  },
  modalButton: {
    position: "absolute",
    height: 50,
    width: 50,
    top: 50,
    right: 50,
    backgroundColor: "red"
  }
});
