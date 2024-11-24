import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Display({ input, result }) {
  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#e3e3e3",
    padding: 20,
  },
  input: {
    fontSize: 30,
    color: "#333",
  },
  result: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },
});
