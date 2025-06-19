import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../globalStyles';
import Button from './Button';

export const OptionButton = ({
  text,
  isSelected = false,
  isCorrect = false,
  onPress,
  showAsGrid = false,

  type,
}) => {
  const isWrong = isSelected && !isCorrect;

  var bg = isSelected ? (isCorrect ? colors.green : colors.red) : colors.white;
  var shadow = isSelected
    ? isCorrect
      ? colors.greenDark
      : colors.redDark
    : colors.grayLight;

  return (
    <Button
      title={text}
      backgroundColor={bg}
      textStyle={{color: colors.black}}
      shadowColor={shadow}
      style={{paddingVertical: 20}}
      onPress={onPress}
    />
  );
};

export const QuizHeader = ({onClose, onHelp, navigation, leftItem}) => {
  const headerStyles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 5,
    },
    closeButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: colors.grayLight,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.grayLight,
      textAlign: 'center',
    },
    helpButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: colors.grayLight,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    helpText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.grayLight,
    },
    leftItem: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.grayLight,
    },
  });
  return (
    <View style={headerStyles.header}>
      <TouchableOpacity style={headerStyles.closeButton} onPress={onClose}>
        <FontAwesome name="times" size={20} color={colors.grayLight} />
      </TouchableOpacity>

      <Text style={headerStyles.title}>Math Quiz</Text>

      {leftItem ? (
        <Text style={headerStyles.leftItem}>{leftItem}</Text>
      ) : (
        <TouchableOpacity style={headerStyles.helpButton} onPress={onHelp}>
          <Text style={headerStyles.helpText}>?</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export const ProgressBar = ({currentStep, totalSteps, progressColor}) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const progress = currentStep / totalSteps;

    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 300, // milliseconds
      useNativeDriver: false, // width animation doesn't support native driver
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, totalSteps]);

  const widthInterpolated = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const progressBarStyles = StyleSheet.create({
    barBackground: {
      height: 10,
      backgroundColor: '#ffffff33',
      borderRadius: 5,
      overflow: 'hidden',
      marginBottom: 20,
    },
    barFill: {
      height: 10,
      backgroundColor: progressColor || colors.yellow,
      borderRadius: 5,
    },
    container: {
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
  });

  return (
    <View style={progressBarStyles.barBackground}>
      <Animated.View
        style={[progressBarStyles.barFill, {width: widthInterpolated}]}
      />
    </View>
  );
};

export const QuizQuestion = ({question, subtitle}) => {
  const questionTextStyles = StyleSheet.create({
    container: {
      paddingVertical: 20,
    },
    question: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.white,
      lineHeight: 36,
    },
    subtitle: {
      fontSize: 16,
      color: colors.grayLight,
      textAlign: 'left',
      marginTop: 10,
    },
  });

  return (
    <View style={questionTextStyles.container}>
      <Text style={questionTextStyles.question}>{question}</Text>
      {subtitle && <Text style={questionTextStyles.subtitle}>{subtitle}</Text>}
    </View>
  );
};
