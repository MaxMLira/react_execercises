import {Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {MyButton} from "../components/MyButton";

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'center'}}>
      <Text>Home tela</Text>
      <MyButton
        title={'go to settings'}
        onPress={() => navigation.navigate('Settings' as never)}
      />
    </View>
  );
}
