import React, { useEffect, useMemo, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import GuessItem from "../components/Game/GuessItem";
import Colors from "../Utilities/Colors";

function generateRandomBetween(min, max, exclude) {
  const mid = Math.floor((min + max) / 2);

  if (mid === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return mid;
  }
}

let lowBoundary = 1;
let highBoundary = 100;

const GameScreen = ({ pickedNumber, onGameOver }) => {
  const initialGuess = useMemo(
    () => generateRandomBetween(1, 100, pickedNumber),
    [pickedNumber]
  );
  const [guessedNumber, setGuessedNumber] = useState(initialGuess);
  const [gameRounds, setGameRounds] = useState([50]);

  useEffect(() => {
    if (guessedNumber == pickedNumber) {
      onGameOver(gameRounds.length);
    }
  }, [guessedNumber, pickedNumber, onGameOver]);

  useEffect(() => {
    lowBoundary = 1;
    highBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction == "lower" && guessedNumber < pickedNumber) ||
      (direction == "higher" && guessedNumber > pickedNumber)
    ) {
      Alert.alert("Don't lie", "You know this is wrong...!", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction == "lower") {
      highBoundary = guessedNumber;
    } else {
      lowBoundary = guessedNumber + 1;
    }
    const nextGuess = generateRandomBetween(
      lowBoundary,
      highBoundary,
      guessedNumber
    );
    setGuessedNumber(nextGuess);
    setGameRounds((prevState) => [...prevState, nextGuess]);
  };

  return (
    <View style={styles.GameScreen}>
      <Title style={{ textShadowColor: Colors.accent500 }}>
        Oponents's guess
      </Title>
      <NumberContainer>{guessedNumber}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" color="white" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" color="white" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.guessList}>
        <FlatList
          data={gameRounds}
          renderItem={(itemData) => (
            <GuessItem
              roundNumber={`${itemData.index + 1}`}
              gussedNumber={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  GameScreen: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  guessList: {
    flex: 1,
    marginVertical: 10,
  },
});
