import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ProgressBar = ({currentStep, totalSteps}) => {
  const renderSteps = () => {
    const steps = [];
    for (let i = 1; i <= totalSteps; i++) {
      steps.push(
        <View
          key={i}
          style={[
            styles.step,
            {
              backgroundColor:
                i <= currentStep ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)',
            },
          ]}
        />,
      );
    }
    return steps;
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>{renderSteps()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  step: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});
