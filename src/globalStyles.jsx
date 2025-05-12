// /src/style.jsx

import {StyleSheet} from 'react-native';

export const colors = {
  white: '#fefbeb',
  black: '#333333',
  primary: '#89E219',
  primaryDark: '#58CC02',
  primaryLight: '#a8e1a0',
  secondary: '#40b6e8',
  accent: '#f9a825',
  lightGray: '#f0f0f0',
  gray: '#d0d0d0',
  darkGray: '#a0a0a0',
};

const S_ = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '100%',
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
