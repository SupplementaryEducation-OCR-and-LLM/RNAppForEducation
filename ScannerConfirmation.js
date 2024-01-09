import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ScannerConfirmation = () => {
  return (
    <View style={styles.containerStyle}>
      <Text>Your scanned image is being processed...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'red',
    width: '80%',
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
export default ScannerConfirmation;
