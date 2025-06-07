import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const OptionButton = ({
  id,
  text,
  backgroundColor = '#FFFFFF',
  isSelected = false,
  onPress,
}) => {
  const isYellow = backgroundColor === '#FCD34D';
  const isPink = backgroundColor === '#F472B6';

  const getTextColor = () => {
    if (isYellow || isPink) return '#000000';
    return '#000000';
  };

  const getSelectedStyle = () => {
    if (isSelected) {
      return {
        transform: [{scale: 0.95}],
        shadowOpacity: 0.3,
        elevation: 8,
      };
    }
    return {};
  };

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}, getSelectedStyle()]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.buttonText, {color: getTextColor()}]}>
        {id}. {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
