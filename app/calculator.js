import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Display from "../components/Display";
import Button from "../components/Button";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["C", "0", "=", "+"],
  ];

  return (
    <View style={styles.container}>
      <Display input={input} result={result} />
      <View style={styles.buttonsContainer}>
        {buttons.map((row, index) => (
          <View key={index} style={styles.row}>
            {row.map((button) => (
              <Button key={button} value={button} onPress={handlePress} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    flex: 2,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
