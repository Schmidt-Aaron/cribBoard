import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';

export default class OptionsModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.container}>
            <View style={styles.modalContainer}>
              <Text>Hello World!</Text>
          <Text>Select Players 2-4</Text>
          <Text>Set Background</Text>
          <Text>Game length</Text>
          <Text>Player names</Text>
          <Text>Peg Colors</Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Options</Text>
        </TouchableHighlight>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex:1,
    alignContent:'center',
    justifyContent:'center'
  },
  modalContainer: {
    elevation:2,
    width:  '95%',
    height: '95%',
    backgroundColor:'white',
    justifyContent: 'center',
    alignContent: 'center'
  }
})