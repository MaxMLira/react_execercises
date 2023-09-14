import React, {useContext, useEffect} from 'react';
import {createContext, useState} from 'react';
import {AuthService} from '../services/authService';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthData {
  token: string;
  email: string;
  name: string;
}
interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => void;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      loadfromStorage();
    }, 2000);
  }, []);
  async function loadfromStorage() {
    const auth = await AsyncStorage.getItem('@AuthData');
    if (auth) {
      setAuthData(JSON.parse(auth) as AuthData);
    }
    setLoading(false);
  }
  async function signIn(email: string, password: string) {
    try {
      const auth = await AuthService.signIn(email, password);
      setAuthData(auth);
      AsyncStorage.setItem('@AuthData', JSON.stringify(auth));
    } catch (error) {
      Alert.alert(error.message, 'try again');
    }
  }
  async function signOut(): Promise<void> {
    setAuthData(undefined);
    AsyncStorage.removeItem('@AuthData');
    return;
  }

  return (
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
