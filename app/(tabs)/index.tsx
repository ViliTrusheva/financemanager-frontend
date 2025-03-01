import React, { useState, useCallback } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField, InputSlot } from "@/components/ui/input";
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
    setCategories([...categories, newCategoriesScreen]);

    setNewCategory(""); // Clear the input field
  }, [newCategory]);

  const renderItem = useCallback(
    ({ item }: { item: CategoriesEntity }) => <Text style={styles.item}>• {item.title}</Text>,
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Input>
          <InputField
            onChangeText={setNewCategory}
            value={newCategory}
            placeholder="Write..."
            keyboardType="default"
            onSubmitEditing={handleAddCategory} // Executes when "Enter" is pressed
          />
        </Input>

        <Button onPress={handleAddCategory}>
          <ButtonText>Add</ButtonText>
        </Button>

        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  inputContainer: {
    position: "absolute",
    flexDirection: "column", // Ensures input and button are aligned in a column
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 3,
  },

  item: {
    padding: 10,
    marginVertical: 3,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  list: {
    flexGrow: 1,
    width: "100%",
  },
  listItem: {
    backgroundColor: "#e0e0e0", // Light gray background
    padding: 12,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
});
