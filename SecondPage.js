import React, {useState, useEffect} from 'react';
import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';

export default ({navigation}) => {
  const [scannedImage, setScannedImage] = useState();

  const scanDocument = async () => {
    // start the document scanner
    const {scannedImages} = await DocumentScanner.scanDocument();

    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages[0]);
    }
  };

  useEffect(() => {
    // call scanDocument on load
    scanDocument();
  }, []);

  return (
    <View>
      <Image
        resizeMode="contain"
        style={{width: '100%', height: '80%'}}
        source={{uri: scannedImage}}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('ConfirmScan')}
        style={styles.buttonStyle}>
        <Text>Confirm Scanned Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
