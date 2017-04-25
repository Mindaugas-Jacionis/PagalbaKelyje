import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Platform, Alert } from 'react-native';

const isApple = Platform.OS === 'ios';

class CallHelpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: '',
      location: '',
      comments: ''
    }
  }

  handleDeepLink() {
    const { navigator } = this.props;
    navigator.popToRoot({ animated: false });
    navigator.handleDeepLink({
      link: 'call_help/12345/test'
    });
  }

  onCallHelp() {
    this.props.navigator.pop();
    Alert.alert('Pagalbos užklausa išsiųsta netoliese esantiems vartotojams');
  }

  render() {
    const { location, issue, comments } = this.state;

    return (
      <View style={styles.container}>
        <View style={{flexGrow: 1, width: '100%'}}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ issue: text })}
            value={issue}
            placeholder={'Koks gedimas?'}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ location: text })}
            value={location}
            placeholder={'Lokacija'}
          />
          <TextInput
            style={[styles.input, styles.multiline]}
            onChangeText={(text) => this.setState({ comments: text })}
            value={comments}
            placeholder={'Papildoma info'}
            multiline={true}
          />
        </View>
        <TouchableOpacity onPress={() => this.onCallHelp()} style={styles.button}>
          <Text style={styles.text}>Siusti uzklausa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleDeepLink()} style={styles.button}>
          <Text style={styles.text}>Deep Link test</Text>
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
    backgroundColor: '#F5FCFF',
    marginHorizontal: 14
  },

  button: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 6,
    marginVertical: 7,
    backgroundColor: '#239d1a',
    width: '100%'
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    color: '#ffffff',
    margin: 10,
  },

  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: isApple ? 1 : 0,
    borderRadius: 6,
    marginTop: 14,
    paddingHorizontal: 14
  },

  multiline: {
    paddingVertical: 7,
    height: '20%'
  }
});

export default CallHelpScreen;
