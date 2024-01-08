import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const FirstPage = ({navigation}) => {
  return (
    <View style={{margin: 30, backgroundColor: 'gray'}}>
      <Text>Salam</Text>

      <Button
        title="Change Me to Bitch"
        onPress={() => navigation.navigate('Bitch')}
      />
    </View>
  );
};

export default FirstPage;
