import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NestingLevel = 15;
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const createNestedComponents = (depth: number) => {
  if (depth <= 0) return <Text style={styles.text}>Depth Reached</Text>;

  return (
    <View style={[styles.container, { backgroundColor: getRandomColor() }]}>
      <Text style={styles.text}>Level {NestingLevel + 1 - depth}</Text>
      {createNestedComponents(depth - 1)}
    </View>
  );
};

export default function nestedui() {
  return (
   <SafeAreaView style={styles.mainContainer}>
     <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Link href="/" style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </Link>
        <Text style={styles.header}>Nested UI</Text>
        {createNestedComponents(NestingLevel)}
        </ScrollView>
      <StatusBar style="auto" />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,
  },
  container: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    width: '100%',
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: 75,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
