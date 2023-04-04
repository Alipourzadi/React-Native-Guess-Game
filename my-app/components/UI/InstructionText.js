import { StyleSheet, Text } from "react-native";

import Colors from "../../Utilities/Colors";

const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    textShadowColor: Colors.accent500,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
    fontSize: 32,
    fontWeight: "800",
  },
});
