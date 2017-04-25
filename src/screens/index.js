import { Navigation } from 'react-native-navigation';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import CallHelpScreen from './CallHelpScreen';
import TestScreen from './TestScreen';
import MultiSelectListScreen from './MultiSelectListScreen';

export function registerScreens() {
  Navigation.registerComponent('LoginScreen', () => LoginScreen);
  Navigation.registerComponent('MainScreen', () => MainScreen);
  Navigation.registerComponent('CallHelpScreen', () => CallHelpScreen);
  Navigation.registerComponent('TestScreen', () => TestScreen);
  Navigation.registerComponent('MultiSelectListScreen', () => MultiSelectListScreen);
}
