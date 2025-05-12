import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DuolingoButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPressed && styles.buttonPressed, // active state styling
      ]}
      onPressIn={() => setIsPressed(true)} // on press down
      onPressOut={() => setIsPressed(false)} // on press release
    >
      <Text style={styles.buttonText}>Press Me</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#e5e5e5',
    borderBottomWidth: 6,
    borderBottomColor: '#e5e5e5',
    margin: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    transition: 'all 0.1s', // Note: React Native doesn't support CSS transitions
  },
  buttonPressed: {
    borderBottomWidth: 2,
    borderBottomColor: '#1cb0f6',
  },
  buttonText: {
    color: '#000', // Text color
    fontSize: 16,
  },
});

export default DuolingoButton;
