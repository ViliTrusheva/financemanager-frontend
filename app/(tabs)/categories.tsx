import { Text, View, StyleSheet } from "react-native";

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My categories go here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#25292e",
  },
});
