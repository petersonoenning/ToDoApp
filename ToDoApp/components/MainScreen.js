import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TaskInput from "./TaskInput.js";
import TaskItem from "./TaskItem.js";
import Filters from "./Filters.js";
import { TodoContext } from "../contexts/TodoContext";

export default function MainScreen() {
  const { tasks } = useContext(TodoContext);

  return (
    <View style={styles.container}>
      <TaskInput />
      <Filters />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
});
