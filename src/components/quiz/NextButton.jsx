import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const NextButton = ({onPress, disabled = false}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled ? 'rgba(34, 197, 94, 0.5)' : '#22C55E',
        },
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}>
      <Text
        style={[
          styles.buttonText,
          {
            color: disabled ? 'rgba(255, 255, 255, 0.7)' : '#FFFFFF',
          },
        ]}>
        Next
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
    shadowColor: '#22C55E',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
