import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../Utilities/Colors";
import Title from "../components/UI/Title";
import PrimaryButton from "../components/UI/PrimaryButton";

const GameOverScreen = ({ pickedNumber, gameRounds, onGameStart }) => {
  return (
    <View style={styles.rootScreen}>
      <Title
        style={{ color: Colors.accent500, textShadowColor: Colors.accent500 }}
      >
        Game over
      </Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/image/game-over.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <Text style={styles.gameSummury}>
        Your phone needed <Text style={styles.gameStats}>{gameRounds}</Text>{" "}
        round to guess number{" "}
        <Text style={styles.gameStats}>{pickedNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onGameStart}>start new game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: Colors.primery700,
    overflow: "hidden",
  },
  image: { width: "100%", height: "100%", opacity: 0.9 },
  gameSummury: {
    color: Colors.primery800,
    textAlign: "center",
    fontSize: 25,
    paddingHorizontal: 20,
    margin: 10,
  },
  gameStats: {
    color: Colors.primery600,
  },
});
