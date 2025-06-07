import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Levels Grid Component
export const LevelsGrid = ({navigation}) => {
  const levels = [
    {level: 1, isCompleted: true, hasStars: true, starsCount: 2},
    {level: 1, isCompleted: true, hasStars: true, starsCount: 2},
    {level: 1, isCompleted: true, hasStars: true, starsCount: 2},
    {level: 1, isCompleted: true, hasStars: true, starsCount: 2},
    {level: 1, isCompleted: true, hasStars: true, starsCount: 2},
    {level: 1, isCompleted: true, hasStars: true, starsCount: 2},
    {level: 1, isCompleted: true, hasStars: true, starsCount: 2},
    {level: 1, isCompleted: true, hasStars: true, starsCount: 2},
    {level: 1, isCompleted: true, hasStars: true, starsCount: 2},
    {level: 1, isCompleted: true, hasStars: false, starsCount: 0},
    {level: 1, isCompleted: false, hasStars: false, starsCount: 0},
    {level: 1, isCompleted: false, hasStars: false, starsCount: 0},
    {level: 1, isCompleted: true, hasStars: false, starsCount: 0},
    {level: 1, isCompleted: false, hasStars: false, starsCount: 0},
    {level: 1, isCompleted: false, hasStars: false, starsCount: 0},
  ];

  return (
    <View style={styles.levelsGrid}>
      {levels.map((item, index) => (
        <LevelItem
          key={index}
          level={index + 1}
          isCompleted={item.isCompleted}
          hasStars={item.hasStars}
          starsCount={item.starsCount}
          navigation={navigation}
        />
      ))}
    </View>
  );
};

export const LevelItem = ({
  level,
  isCompleted,
  hasStars,
  starsCount,
  navigation,
}) => {
  return (
    <Pressable
      style={styles.levelItem}
      onPress={() => navigation.navigate('Quiz')}>
      <View style={styles.starsContainer}>
        {[1, 2, 3].map(star => (
          <FontAwesome
            key={star}
            name={hasStars && star <= starsCount ? 'star' : 'star-o'}
            size={16}
            color={hasStars && star <= starsCount ? '#FCD34D' : '#E5E7EB'}
            style={styles.starIcon}
          />
        ))}
      </View>
      <View
        style={[
          styles.levelCircle,
          {
            backgroundColor: isCompleted ? '#FCD34D' : '#D1D5DB',
            borderColor: isCompleted ? '#F59E0B' : '#9CA3AF',
          },
        ]}>
        <Text
          style={[
            styles.levelNumber,
            {color: isCompleted ? '#1F2937' : '#6B7280'},
          ]}>
          {level}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  levelsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F9FAFB',
    gap: 15,
  },
  levelItem: {
    alignItems: 'center',
    width: '30%',
    marginBottom: 25,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    height: 20,
    gap: 3,
  },
  starIcon: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 1,
  },
  levelCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  levelNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
