import React from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

export default class App {
  constructor() {
    this.startApp();
    console.disableYellowBox = true;
  }

  startApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'LoginScreen',
        title: 'Login'
      }
    });
  }
}
