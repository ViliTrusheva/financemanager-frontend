import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React from "react";
import { CategoriesScreenEntity } from "./CategoriesScreenEntity";

export default function CategoriesScreen() {
  const [CategoriesScreens, setCategoriesScreens] = React.useState([] as CategoriesScreenEntity[]);
  const [CategoriesScreen, setCategoriesScreen] = React.useState("");
  const onAddCategoriesScreen = () => {
    const newCategoriesScreen = new CategoriesScreenEntity(
      CategoriesScreens.length,
      CategoriesScreen
    );
    setCategoriesScreens([...CategoriesScreens, newCategoriesScreen]);
    console.log(CategoriesScreens);
  };
  return (
    <View>
      <Text>Add your ToDo</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCategoriesScreen}
        value={CategoriesScreen}
        placeholder="useful placeholder"
      />

      <Button
        onPress={onAddCategoriesScreen}
        title="Add CategoriesScreen"
        color="#841584"
        accessibilityLabel="Add CategoriesScreen"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
