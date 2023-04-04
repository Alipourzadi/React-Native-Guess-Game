import { StyleSheet, Text } from "react-native";

import Colors from "../../Utilities/Colors";

const Title = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    color: Colors.primery600,
    textShadowColor: Colors.primery500,
    textShadowOffset: { height: 0, width: 0 },
    textShadowRadius: 6,
    fontSize: 42,
    fontWeight: "bold",
    padding: 8,
    marginTop: 30,
    textAlign: "center",
  },
});
