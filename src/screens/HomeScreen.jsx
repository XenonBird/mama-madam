import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import Header from '../components/Header';
import SubjectCardsRow from '../components/SubjectCardsRow';
import {CurrentLesson} from '../components/CurrentLesson';
import {LevelsGrid} from '../components/LevelsGrid';
import Button from '../components/Button';
import Hi from '../components/Hi';
import {colors} from '../globalStyles'; // <-- Add this import

// Main App Component
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.2)"
        translucent
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {/* <Header /> */}

        <Hi />
        <View style={{paddingHorizontal: 16}}>
          <SubjectCardsRow />
          <CurrentLesson />
          <LevelsGrid navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 0,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background, // <-- Use shared color
  },
});

export default HomeScreen;
