import { StyleSheet, View } from "react-native";

import Colors from "../../Utilities/Colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 32,
    padding: 16,
    backgroundColor: Colors.primery800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
