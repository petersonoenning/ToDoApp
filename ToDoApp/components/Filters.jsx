import React, { useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import { TodoContext } from "../contexts/TodoContext";

export default function Filters() {
  const { setFilter } = useContext(TodoContext);

  return (
    <View style={styles.container}>
      <Button title="Todas" onPress={() => setFilter("all")} />
      <Button title="Concluídas" onPress={() => setFilter("completed")} />
      <Button title="Pendentes" onPress={() => setFilter("pending")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
