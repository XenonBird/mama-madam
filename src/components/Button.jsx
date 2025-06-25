import React, {useState} from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';
import {colors} from '../globalStyles';
import Toast from 'react-native-toast-message';
import SoundPlayer from 'react-native-sound-player';

// Sound.setCategory('Playback');

const Button = ({
  title,
  onPress = () => {},
  disabled = false,
  variant = 'primary', // 'primary', 'secondary', 'correct', 'incorrect'
  size = 'large', // 'small', 'medium', 'large'
  style,
  textStyle,
  backgroundColor, // optional custom background color
  shadowColor, // optional custom shadow color
  noShadow = false, // if true, no shadow will be applied
  children, // support for custom children
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    try {
      SoundPlayer.playSoundFile('click', 'wav');
    } catch (e) {
      console.log('Cannot play sound file', e);
    }
  };

  const handlePress = () => {
    console.log(`Button pressed: ${title}`);
    onPress();
    handleClick();

    Toast.show({
      type: 'success',
      text1: title || 'Clicked',
      text2: `${title || 'a'} Button Pressed 👋`,
      position: 'bottom',
    });
  };

  const buttonStyles = [
    styles.button,
    styles[size],
    disabled ? styles.disabled : styles[variant],
    backgroundColor && {backgroundColor},
    style,
    isPressed ? styles.pressedStyle : styles.unpressedStyle,
  ];

  const textStyles = [
    styles.text,
    styles[`${size}Text`],
    disabled ? styles.disabledText : styles[`${variant}Text`],
    textStyle,
  ];

  const shadowStyles = [
    styles.buttonShadow,
    disabled ? styles.disabledShadow : styles[`${variant}Shadow`],
    shadowColor && {backgroundColor: shadowColor},
    isPressed && {transform: [{translateY: 4}]},
  ];

  return (
    <Pressable
      style={buttonStyles}
      onPress={handlePress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      disabled={disabled}>
      {!noShadow && <View style={shadowStyles} />}

      {children ? (
        children
      ) : (
        <View style={styles.buttonContent}>
          <Text style={textStyles}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
  },
  small: {
    minHeight: 40,
    paddingHorizontal: 16,
  },
  medium: {
    minHeight: 48,
    paddingHorizontal: 24,
  },
  large: {
    minHeight: 56,
    paddingHorizontal: 32,
  },

  // Button variants
  primary: {
    backgroundColor: colors.green,
  },
  secondary: {
    backgroundColor: colors.white,
  },
  correct: {
    backgroundColor: colors.green,
  },
  incorrect: {
    backgroundColor: colors.red,
  },
  disabled: {
    backgroundColor: colors.grayLight,
  },

  // Shadow/border effects
  buttonShadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 6,
    borderRadius: 16,
  },
  primaryShadow: {
    backgroundColor: colors.greenDark,
  },
  secondaryShadow: {
    backgroundColor: colors.grayLight,
  },
  correctShadow: {
    backgroundColor: colors.greenDark,
  },
  incorrectShadow: {
    backgroundColor: colors.redDark,
  },
  disabledShadow: {
    backgroundColor: colors.grayMedium,
  },

  // Button content
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 6, // Offset for shadow
  },

  // Text styles
  text: {
    fontWeight: '700',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 16,
  },
  mediumText: {
    fontSize: 18,
  },
  largeText: {
    fontSize: 20,
  },

  // Text colors
  primaryText: {
    color: colors.white,
  },
  secondaryText: {
    color: colors.black,
  },
  correctText: {
    color: colors.white,
  },
  incorrectText: {
    color: colors.white,
  },
  disabledText: {
    color: colors.grayDisabled,
  },

  // Pressed style
  pressedStyle: {
    transform: [{translateY: 4}],
    shadowOffset: {width: 0, height: 1},
    elevation: 1,
  },
  unpressedStyle: {
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
});

export default Button;
