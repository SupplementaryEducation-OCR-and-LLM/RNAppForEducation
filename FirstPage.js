import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React from 'react';

const FirstPage = ({navigation}) => {
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Bitch')}
        style={styles.buttonStyle}>
        <Text>Proceed to Scanner</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {margin: 30, backgroundColor: 'gray'},
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
});

export default FirstPage;
