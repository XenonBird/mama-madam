import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {colors} from '../globalStyles';

const ProgressBar = ({currentStep, totalStepNumbers}) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const progressWidth = (currentStep / totalStepNumbers) * 100;

    Animated.timing(progress, {
      toValue: progressWidth,
      duration: 300,
      useNativeDriver: false, // useNativeDriver must be false for width animation
    }).start();
  }, [currentStep, totalStepNumbers]);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.progressBar}>
      <Animated.View
        style={[styles.progressFill, {width: widthInterpolated}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    width: '100%',
    height: 16,
    backgroundColor: '#eee',
    borderRadius: 99,
    overflow: 'hidden',
    marginVertical: 16,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primaryDark,
    borderRadius: 99,
  },
});

export default ProgressBar;
