import { StyleSheet, Button, Text, View } from "react-native";

export default function Spare({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>MotherFucker</Text>
      {/* <StatusBar style="auto" /> */}
      <Button
        title="Click me"
        onPress={() => {
          navigation.navigate("Bitch");
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
