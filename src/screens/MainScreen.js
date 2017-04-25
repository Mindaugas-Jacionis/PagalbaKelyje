import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, TextInput } from 'react-native';
import dismissKeyboard from 'react-native-dismiss-keyboard';

const isApple = Platform.OS === 'ios';

class MainScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent((event) => this.onNavigatorEvent(event));
    this.state = {
      carPlate: '',
      showModal: false
    }
  }

  onNavigatorEvent(event) {
    const { navigator } = this.props;

    if (event.type == 'DeepLink') {
      const parts = event.link.split('/');

      if (parts[0] == 'call_help') {
        navigator.push({
          screen: 'CallHelpScreen',
          passProps: { testToken: parts[1] }
        });
        if (parts[2] && parts[2] === 'test') {
          navigator.push({
            screen: 'TestScreen',
            passProps: { testToken: parts[1] }
          });
        }
      } else {
        console.log('unhandled deeplink');
      }
    }
  }

  toggleModal() {
    dismissKeyboard();
    this.setState({ showModal: !this.state.showModal });
  }

  nextScreen() {
    this.props.navigator.push({
      screen: 'CallHelpScreen',
      title: 'Prašyti pagalbos'
    });
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
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({ carPlate: String(text).toUpperCase() })}
              value={carPlate}
            />
            <TouchableOpacity onPress={() => this.toggleModal()} style={styles.button}>
              <Text style={styles.text}>Išsaugoti</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.carPlate]}
          onPress={() => this.toggleModal()}
        >
          <Text style={[styles.text, { color: '#000' }]}>{carPlate || 'Įvesti automobilio numerius'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.help]}
          onPress={() => this.nextScreen()}
        >
          <Text style={styles.text}>Prašyti bagalbos</Text>
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
    color: '#fff',
    margin: 10
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
    bottom: 14,
    width: null,
    left: 14,
    right: 14
  },

  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: isApple ? 1 : 0,
    borderRadius: 6,
    marginTop: 14,
    paddingHorizontal: 14
  }
});

export default MainScreen;
