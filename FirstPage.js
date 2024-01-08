import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const FirstPage = ({navigation}) => {
  return (
    <View style={styles.containerStyle}>
      <Text>Salamgjhgsdasd</Text>

      <Button
        title="Change Me to Bitch"
        onPress={() => navigation.navigate('Bitch')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {margin: 30, backgroundColor: 'gray'},
});

export default FirstPage;
