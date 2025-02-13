import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "../categories"; // Corrected import path

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Frej does not like Typescript!</Text>
      <CategoriesScreen /> {/* Uncommented CategoriesScreen */}
      <StatusBar style="auto" />
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
