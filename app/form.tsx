import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Switch,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [receiveNewsletters, setReceiveNewsletters] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [toggleSwitch, setToggleSwitch] = useState(false);

  const handleSubmit = () => {
    console.log({
      name,
      email,
      password,
      bio,
      receiveNewsletters,
      checkboxValue,
      radioValue,
      toggleSwitch,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Link href="/" style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </Link>
        <Text style={styles.header}>Profile Settings</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={bio}
            onChangeText={setBio}
            placeholder="Write a short bio"
            multiline
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Receive Newsletters</Text>
          <Switch
            value={receiveNewsletters}
            onValueChange={setReceiveNewsletters}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Checkbox</Text>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={[styles.checkbox, checkboxValue && styles.checkboxChecked]}
              onPress={() => setCheckboxValue(!checkboxValue)}
            >
              {checkboxValue && <View style={styles.checkboxTick} />}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>I agree to the terms</Text>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Radio Buttons</Text>
          <View style={styles.radioContainer}>
            <TouchableOpacity
              style={[
                styles.radioButton,
                radioValue === "option1" && styles.radioButtonChecked,
              ]}
              onPress={() => setRadioValue("option1")}
            >
              {radioValue === "option1" && (
                <View style={styles.radioInnerCircle} />
              )}
            </TouchableOpacity>
            <Text style={styles.radioLabel}>Option 1</Text>
          </View>
          <View style={styles.radioContainer}>
            <TouchableOpacity
              style={[
                styles.radioButton,
                radioValue === "option2" && styles.radioButtonChecked,
              ]}
              onPress={() => setRadioValue("option2")}
            >
              {radioValue === "option2" && (
                <View style={styles.radioInnerCircle} />
              )}
            </TouchableOpacity>
            <Text style={styles.radioLabel}>Option 2</Text>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Toggle Switch</Text>
          <Switch value={toggleSwitch} onValueChange={setToggleSwitch} />
        </View>

        <Button title="Submit" onPress={handleSubmit} />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#4CAF50",
  },
  checkboxTick: {
    width: 12,
    height: 12,
    backgroundColor: "#fff",
    borderRadius: 2,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radioButtonChecked: {
    backgroundColor: "#4CAF50",
  },
  radioInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  radioLabel: {
    fontSize: 16,
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
