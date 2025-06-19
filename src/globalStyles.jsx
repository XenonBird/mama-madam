// /src/style.jsx

import {StyleSheet} from 'react-native';

export const colors = {
  green: '#58CC02', // Primary/Correct
  greenDark: '#4CAE00', // Primary/Correct Shadow
  greenLight: '#A8E6CE', // Primary Light
  red: '#FF4B4B', // Incorrect
  redDark: '#E63946', // Incorrect Shadow
  yellow: '#FFD600', // Highlight/Warning/Star
  yellowLight: '#FEF3C7', // Highlight Light
  yellowDark: '#FFC300', // Highlight Shadow
  blue: '#42A5F5', // Info/Progress
  blueDark: '#1976D2', // Info Shadow
  purple: '#A259FF', // Fun/Accent
  purpleDark: '#6C2EBE', // Fun/Accent Shadow
  orange: '#FF9800', // Secondary/Accent
  orangeDark: '#F57C00', // Secondary/Accent Shadow
  pink: '#FF69B4', // Fun/Accent
  pinkDark: '#D81B60', // Fun/Accent Shadow
  grayLight: '#E5E5E5', // Secondary/Disabled
  grayMedium: '#CCCCCC', // Shadow/Border
  grayDark: '#777777', // Secondary Text
  grayDisabled: '#AAAAAA', // Disabled Text
  white: '#FFFFFF', // Text/Background
  black: '#333333', // Text
  background: '#F9F9F9', // App Background
  border: '#E0E0E0', // Borders
  transparent: 'rgba(0,0,0,0)', // Transparent
};

const S_ = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '100%',
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
    width: '100%',
    position: 'relative',
  },
  largeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  medium: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  shadow: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonPrimary: {
    backgroundColor: colors.primaryDark,
    //   backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 16,
    marginTop: 20,
    shadowColor: '#000',
    borderColor: colors.black,
    borderWidth: 2,
    //   borderColor: colors.primaryDark,
    //   borderWidth: 1,
    borderBottomWidth: 8,
  },
});

export default S_;
