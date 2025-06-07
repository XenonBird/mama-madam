import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const QuizQuestion = ({question, subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  question: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'left',
    marginTop: 10,
  },
});
