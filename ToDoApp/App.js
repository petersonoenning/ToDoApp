import React from "react";
import { TodoProvider } from "./contexts/TodoContext.jsx";
import MainScreen from "./components/MainScreen.jsx";

export default function App() {
  return (
    <TodoProvider>
      <MainScreen />
    </TodoProvider>
  );
}
