import {TextInput, TextInputProps, StyleSheet} from 'react-native';

export function MyInput(props: TextInputProps) {
  return (
    <TextInput placeholderTextColor={'#bbb'} style={styles.input} {...props} />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderColor: '#1d013f',
    paddingHorizontal: 8,
    color: '#000',
    borderWidth: 1,
    width: '100%',
    height: 50,
    marginBottom: 16,
  },
});
