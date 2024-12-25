import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TodoContext } from "../contexts/TodoContext";

export default function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useContext(TodoContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleTask(task.id)}>
        <Text style={styles.text}>
          {task.text}
        </Text>
      </TouchableOpacity>
      {/* Verificar se a tarefa foi concluída ou está pendente */}
      <View style={styles.statusContainer}>
        {task.completed ? (
          <Text style={styles.completedMessage}>Concluído</Text>
        ) : (
          <Text style={styles.pendingMessage}>Pendente</Text>
        )}
      </View>
      <TouchableOpacity onPress={() => deleteTask(task.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  text: {
    fontSize: 16,
  },
  statusContainer: {
    flexDirection: "column", //
    alignItems: "flex-start", //
    marginLeft: 10, //
  },
  completedMessage: {
    color: "green", // Cor para indicar que a tarefa está concluída
    fontSize: 14,
  },
  pendingMessage: {
    color: "red", // Cor para indicar que a tarefa está pendente
    fontSize: 14,
  },
  delete: {
    color: "red",
    fontWeight: "bold",
  },
});
