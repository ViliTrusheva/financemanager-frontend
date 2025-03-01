import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { MaterialIcons } from "@expo/vector-icons";
import { CategoriesEntity } from "../CategoriesEntity";

interface CategoriesEntity {
  id: number;
  title: string;
}

export default function Home() {
  const [categories, setCategories] = useState<CategoriesEntity[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");

  const handleAddCategory = useCallback(() => {
    if (newCategory.trim() === "") return; // Prevent adding empty categories

    const newCategoriesScreen = new CategoriesEntity(categories.length, newCategory);
    setCategories([newCategoriesScreen, ...categories]); // Add new item at the top

    setNewCategory(""); // Clear input field
  }, [newCategory, categories]);

  const renderItem = useCallback(
    ({ item }: { item: CategoriesEntity }) => (
      <View style={styles.listItem}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    ),
    []
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Input style={styles.input}>
            <InputField
              onChangeText={setNewCategory}
              value={newCategory}
              placeholder="Enter category..."
              keyboardType="default"
              onSubmitEditing={handleAddCategory} // Executes when "Enter" is pressed
              returnKeyType="done" // Changes the "Enter" key to "Done"
            />
          </Input>

          <Button onPress={handleAddCategory}>
            <ButtonIcon as={() => <MaterialIcons name="add" size={24} color="white" />} />
          </Button>
        </View>

        <View style={styles.list}>
          <View style={styles.listItem}>
            <FlatList
              data={categories}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              contentContainerStyle={styles.list}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,
    margin: 4,
    borderRadius: 8,
  },
  input: {
    flex: 1, // Takes full width except button space
    marginRight: 6,
    backgroundColor: "#fff",
  },

  list: {
    flexGrow: 1,
    // width: "100%",
  },
  listItem: {
    backgroundColor: "#e0e0e0", // Light gray background
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: "center",
    // width: "100%",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});
