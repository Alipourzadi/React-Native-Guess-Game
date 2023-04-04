import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../../Utilities/Colors";

const GuessItem = ({ roundNumber, gussedNumber }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>{roundNumber}.</Text>
      <Text style={styles.Text}>Oponents guessed {gussedNumber}</Text>
    </View>
  );
};

export default GuessItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.accent500,
    borderWidth: 1,
    borderColor: Colors.primery800,
    padding: 8,
    marginHorizontal: 30,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  Text: {
    color: Colors.primery700,
    fontSize: 24,
  },
});
