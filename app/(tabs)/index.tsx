import React, { useState, useCallback } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField, InputSlot } from "@/components/ui/input";
import { CategoriesEntity } from "../CategoriesEntity";

interface CategoriesEntity {
  id: number;
  title: string;
}

export default function Home() {
  const [categoriesScreens, setCategoriesScreens] = useState<CategoriesEntity[]>([]);
  const [categoryScreen, setCategory] = useState<string>("");

  const addCategory = useCallback(() => {
    const newCategoriesScreen = new CategoriesEntity(categoriesScreens.length, categoryScreen);
    setCategoriesScreens([...categoriesScreens, newCategoriesScreen]);
    console.log(categoriesScreens);
  }, [categoriesScreens, categoryScreen]);

  const renderItem = useCallback(
    ({ item }: { item: CategoriesEntity }) => <Text style={styles.item}>• {item.title}</Text>,
    []
  );

  return (
    <View style={styles.container}>
      <Input>
        <InputSlot className="pl-3">
          <InputField
            onChangeText={setCategory}
            value={categoryScreen}
            placeholder="Write..."
            keyboardType="default"
          />
        </InputSlot>
      </Input>

      <Button className="ml-auto" onPress={addCategory}>
        <ButtonText className="text-typography-0">Add</ButtonText>
      </Button>

      <FlatList
        data={categoriesScreens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
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
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9c2ff",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  list: {
    width: "100%",
  },
});
