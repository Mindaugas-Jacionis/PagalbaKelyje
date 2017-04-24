import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          MainScreen
        </Text>
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

  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    color: '#000000',
    margin: 10,
  },
});

export default MainScreen;
