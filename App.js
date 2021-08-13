import React, { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    if(enteredGoal.length === 0) return;
    setCourseGoals((prevState) => [
      ...prevState,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    setIsModalOpen(false);
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((prevState) => {
      return courseGoals.filter((el) => el.key !== goalId);
    });
  };
  const cancelModalHandler = () => {
    setIsModalOpen(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsModalOpen(true)} />
      <GoalInput
        onCancel={cancelModalHandler}
        isModalOpen={isModalOpen}
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        //   keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={deleteGoalHandler.bind(this, itemData.item.key)}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
