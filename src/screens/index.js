import { Navigation } from 'react-native-navigation';
import LoginScreen from './LoginScreen';

export function registerScreens() {
  Navigation.registerComponent('LoginScreen', () => LoginScreen);
}
