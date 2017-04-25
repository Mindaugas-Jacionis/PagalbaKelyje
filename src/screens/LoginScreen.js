import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  onLogin() {
    this.setState({ loading: true });

    setTimeout(() => {
      this.props.navigator.resetTo({
        // screen: 'MainScreen'
        screen: 'MultiSelectListScreen'
      });
    }, 1500);
  }

  renderLoading() {
    return (
      <ActivityIndicator size='large' color='#000000' style={styles.loading}/>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        {loading && this.renderLoading()}
        <TouchableOpacity onPress={() => this.onLogin()} style={[styles.button, styles.fb]}>
          <Text style={styles.text}>
            Login With Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onLogin()} style={[styles.button, styles.gmail]}>
          <Text style={styles.text}>
            Login with Gmail
          </Text>
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
    width: '100%',
    borderRadius: 6,
    marginVertical: 7
  },

  fb: {
    backgroundColor: '#3B5998'
  },

  gmail: {
    backgroundColor: '#D84A38'
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    color: '#ffffff',
    margin: 10,
  },

  loading: {
    position: 'absolute',
    top: 30
  }
});

export default LoginScreen;
