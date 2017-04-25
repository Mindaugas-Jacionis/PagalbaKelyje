import { Navigation } from 'react-native-navigation';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import CallHelpScreen from './CallHelpScreen';
import TestScreen from './TestScreen';

export function registerScreens() {
  Navigation.registerComponent('LoginScreen', () => LoginScreen);
  Navigation.registerComponent('MainScreen', () => MainScreen);
  Navigation.registerComponent('CallHelpScreen', () => CallHelpScreen);
  Navigation.registerComponent('TestScreen', () => TestScreen);
}
