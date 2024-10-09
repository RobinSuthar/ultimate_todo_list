

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';


function App() {
  return (
      <SafeAreaView>
        <ToDoList />
        <ToDoForm></ToDoForm>
      </SafeAreaView>
  );
}

export default App;
