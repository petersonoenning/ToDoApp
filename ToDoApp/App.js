import React from "react";
import { TodoProvider } from "./contexts/TodoContext.js";
import MainScreen from "./components/MainScreen.js";

export default function App() {
  return (
    <TodoProvider>
      <MainScreen />
    </TodoProvider>
  );
}
