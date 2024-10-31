import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
} from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

function App() {
  const [tasks] = useState([
    "Hurray!! One more month",
    "Do laundry",
    "Go to gym",
    "Walk dog",
    "ToDoLabs",
  ]);
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm></ToDoForm>
    </SafeAreaView>
  );
}

export default App;
