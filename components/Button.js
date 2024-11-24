import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ value, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    margin: 5,
    borderRadius: 5,
    padding: 15,
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});
