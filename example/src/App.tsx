import * as React from 'react';

import { StyleSheet, View, TextInput } from 'react-native';
import { hideKeyboard } from 'react-native-hide-keyboard-when-focus';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onFocus={() => hideKeyboard()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    width: 200,
  },
});
