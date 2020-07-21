import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SplashScreen, LoginScreen, SignupScreen} from '../../screens';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Signup"
          options={{headerShown: false}}
          component={SignupScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
