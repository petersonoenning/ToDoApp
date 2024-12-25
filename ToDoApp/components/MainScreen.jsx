import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TaskInput from "./TaskInput.jsx";
import TaskItem from "./TaskItem.jsx";
import Filters from "./Filters.jsx";
import { TodoContext } from "../contexts/TodoContext.jsx";

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
    flex: 5,
    padding: 50,
    backgroundColor: "#f8f8f8",
  },
});
