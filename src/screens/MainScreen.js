import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carPlate: '',
      showModal: false
    }
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  nextScreen() {
    alert('Call help');
  }

  render() {
    const { carPlate, showModal } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={showModal ? [styles.modalWrapper, styles.activeModal] : styles.modalWrapper}
          onPress={() => this.toggleModal()}
        >
          <View style={styles.modal}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Išsaugoti</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.carPlate]}
          onPress={() => this.toggleModal()}
        >
          <Text style={styles.text}>{carPlate || 'Įvesti automobilio numerius'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.help]}
          onPress={() => this.nextScreen()}
        >
          <Text style={[styles.text, { color: '#fff' }]}>Kviesti pagalba</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    color: '#000000',
    margin: 10,
  },

  modalWrapper: {
    position: 'absolute',
    overflow: 'hidden',
    width: 0,
    height: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    zIndex: 99
  },

  activeModal: {
    width: '100%',
    height: '100%'
  },

  modal: {
    paddingHorizontal: 14,
    margin: 14,
    backgroundColor: '#ffffff',
    borderRadius: 6
  },

  button: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    width: '100%',
    borderRadius: 6,
    marginVertical: 14,
    backgroundColor: '#239d1a'
  },

  carPlate: {
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 7,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#000000',
    width: null
  },

  help: {
    position: 'absolute',
    bottom: 14
  }
});

export default MainScreen;
