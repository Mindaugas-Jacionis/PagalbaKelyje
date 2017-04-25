import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

class TestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Test Screen</Text>
        <ActivityIndicator size='large' color='#000000' style={styles.loading}/>
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
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    color: '#000000',
    margin: 10,
  },

  loading: {
    marginTop: 30
  }
});

export default TestScreen;
