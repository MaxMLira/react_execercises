import {AuthData} from '../context/AuthContext';

async function signIn(email: string, password: string): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === '123456') {
        resolve({
          token: 'fake-token',
          email,
          name: 'Max-gordo',
        });
      } else {
        reject(new Error('invalid credentials'));
      }
    }, 500);
  });
}

export const AuthService = {signIn};
