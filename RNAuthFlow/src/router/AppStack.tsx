import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {SettingsScreen} from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();
export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Settings'} component={SettingsScreen} />
    </Stack.Navigator>
  );
}
