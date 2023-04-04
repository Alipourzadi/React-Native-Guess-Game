import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

import PrimaryButton from "../components/UI/PrimaryButton";
import InstructionText from "../components/UI/InstructionText";
import Title from "../components/UI/Title";
import Colors from "../Utilities/Colors";
import Card from "../components/UI/Card";

function StartGameScreen({ onPickNumber }) {
  const [enteredValue, setEnteredValue] = useState();
  const inputChangeHandler = (enteredText) => {
    setEnteredValue(enteredText);
  };
  const resetInputHandler = () => {
    setEnteredValue("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      Alert.alert("Number is Invalid", "Number must be between 0 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.rootScreen}>
        <Title style={{ textShadowColor: Colors.accent500 }}>
          Guess my number
        </Title>
        <Card>
          <InstructionText>Enter your number</InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={3}
            keyboardType="number-pad"
            keyboardAppearance="dark"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={inputChangeHandler}
            value={enteredValue}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    marginTop: 100,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
