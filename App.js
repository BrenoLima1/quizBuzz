// Navegigation
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Questions from './src/screens/Question';
import Score from './src/screens/Score';

const Stack = createNativeStackNavigator();

export default function App() {
  return  <NavigationContainer>
  <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
    <Stack.Screen name="Splash" component={Splash} />

    <Stack.Screen name="Question" component={Questions} />
    <Stack.Screen name="Score" component={Score} />
  </Stack.Navigator>
</NavigationContainer>
}
