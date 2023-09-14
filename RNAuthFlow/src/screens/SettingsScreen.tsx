import {Text, View} from 'react-native';
import React from 'react';
import { MyButton } from "../components/MyButton";
import { useAuth } from "../context/AuthContext";

export function SettingsScreen() {
  const {signOut} = useAuth();
  return (
    <View>
      <Text>Settings tela</Text>
      <MyButton title={'Logout'} style={{backgroundColor: 'red'}} onPress={signOut} />
    </View>
  );
}
