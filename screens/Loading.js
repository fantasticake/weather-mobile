import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the weather...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "lightblue",
    paddingBottom: 100,
  },
  text: {
    color: "teal",
    fontSize: 30,
    fontWeight: "700",
  },
});
