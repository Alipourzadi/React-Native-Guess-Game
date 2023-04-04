import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./Utilities/Colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [gameRounds, setGameRounds] = useState(0);

  const pickedNumberHandler = (choosenNumber) => {
    setPickedNumber(choosenNumber);
    setGameOver(false);
  };

  const gameOverHandler = (gameRounds) => {
    setGameOver(true);
    setGameRounds(gameRounds);
  };

  const gameStartHandler = () => {
    setPickedNumber(null);
    setGameRounds(0);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = (
      <GameScreen pickedNumber={pickedNumber} onGameOver={gameOverHandler} />
    );
  }
  if (pickedNumber && gameOver) {
    screen = (
      <GameOverScreen
        pickedNumber={pickedNumber}
        gameRounds={gameRounds}
        onGameStart={gameStartHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primery700, Colors.accent500]}
      style={styles.container}
    >
      <ImageBackground
        source={require("./assets/image/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.25,
  },
});
