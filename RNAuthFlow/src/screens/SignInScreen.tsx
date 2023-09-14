import {Image, StyleSheet,  View} from 'react-native';
import React, {useState} from 'react';
import {MyInput} from '../components/MyInput';
import {MyButton} from '../components/MyButton';
import logo from '../../assets/logo.png';
import { useAuth } from "../context/AuthContext";
export function SignInScreen() {
  const {signIn} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={{width: 100, height: 100}}
        resizeMode={'contain'}
        source={logo}
      />
      <MyInput placeholder={'e-mail'} value={email} onChangeText={setEmail} />
      <MyInput
        placeholder={'password'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <MyButton title={'Login in'} onPress={() => signIn(email, password)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    alignItems: 'center',
  },
});
