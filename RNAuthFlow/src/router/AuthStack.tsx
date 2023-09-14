import React from 'react';
import {SignInScreen} from "../screens/SignInScreen";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();
export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'SignIn'} component={SignInScreen} />
    </Stack.Navigator>
  );
}
