import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../globalStyles';

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
            size={20}
            color={
              hasStars && star <= starsCount
                ? colors.yellowDark
                : colors.grayMedium
            }
            style={styles.starIcon}
          />
        ))}
      </View>
      <View
        style={[
          styles.levelCircle,
          {
            backgroundColor: isCompleted ? colors.yellow : colors.grayLight,
            borderColor: isCompleted ? colors.yellowDark : colors.grayMedium,
          },
        ]}>
        <Text style={[styles.levelNumber, {color: colors.grayDark}]}>
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
    width: 60,
    height: 60,
    borderRadius: 99,
    borderWidth: 4,
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
    fontSize: 24,
    fontWeight: 800,
    textAlign: 'center',
  },
});
