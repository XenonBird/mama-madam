import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../globalStyles';
import Button from './Button';

// Current Lesson Component
export const CurrentLesson = () => {
  return (
    <Button
      style={styles.lessonBox}
      size="large"
      backgroundColor={colors.white}
      noShadow={true}>
      <View>
        <Text style={styles.label}>Current Lesson</Text>
        <Text style={styles.lessonTitle}>Alphabet Adventure</Text>
        <Text style={styles.lessonProgress}>Progress: 3/10</Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
          <Icon name="swap-horiz" size={24} color={colors.purple} />
          <Text style={{color: colors.purple, fontSize: 16, marginLeft: 8}}>
            Change Lesson
          </Text>
        </View>
      </View>

      <Image
        source={require('../asset/images/hippo-study.png')}
        style={{width: 120, height: 120}}
      />
    </Button>
  );
};

const styles = StyleSheet.create({
  label: {
    color: colors.purple,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 8,
  },
  lessonBox: {
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  lessonTitle: {
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
  },
  lessonProgress: {
    color: colors.grayDark,
    fontSize: 18,
    marginTop: 4,
  },
});
