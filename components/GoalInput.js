import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.isModalOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          value={enteredGoal}
          placeholder="Course Goal"
          style={styles.input}
        />
        <View style={styles.actions}>
          <View style={styles.button}>
            <Button onPress={props.onCancel} title="CANCEL" color="red" />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="ADD" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: "80%",
  },
  actions: {
    flexDirection: "row",
    width: "80%",

    justifyContent: "space-between",
  },
  button :{
      width: '40%'
  }
});
export default GoalInput;
