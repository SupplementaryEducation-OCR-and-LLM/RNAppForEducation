import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const FirstPage = ({navigation}) => {
  return (
    <View style={styles.containerStyle}>
      <Text>Welcome To Your Educational Assistant!</Text>
      <Image
        resizeMode="contain"
        style={{width: '90%', height: '90%'}}
        source={require('./images/homeImage.jpg')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Bitch')}
        style={styles.buttonStyle}>
        <Text>Proceed to Scanner</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {margin: 25, backgroundColor: 'gray', alignItems: 'center'},
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
