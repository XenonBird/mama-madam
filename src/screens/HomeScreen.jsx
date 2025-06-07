import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Header from '../components/Header';
import SubjectCardsRow from '../components/SubjectCardsRow';
import {CurrentLesson} from '../components/CurrentLesson';
import {LevelsGrid} from '../components/LevelsGrid';

// Main App Component
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Header />
        <SubjectCardsRow />
        <CurrentLesson />
        <LevelsGrid navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
});

export default HomeScreen;
