import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../globalStyles';
import Button from './Button';

// Current Chapter Component
export const CurrentChapter = ({
  chapters,
  currentChapterId,
  handleChapterChange,
}) => {
  const chapter = chapters.filter(c => c.id === currentChapterId)[0];
  const handleChange = x => {
    const randomIndex = Math.floor(Math.random() * chapters.length);
    handleChapterChange(chapters[randomIndex].id);
  };

  const currentChapterIndex = () =>
    chapters.indexOf(chapters.filter(c => c.id === currentChapterId)[0]);
  // ^------ just for testing

  return (
    <Button
      style={styles.chapterBox}
      size="large"
      backgroundColor={colors.white}
      noShadow={true}
      onPress={handleChange}>
      <View>
        <Text style={styles.chapterTitle}>{chapter.title}</Text>
        <Text style={styles.description}>{chapter.shortDescription}</Text>
        {/* <Text style={styles.chapterProgress}>
          Progress: {currentChapterIndex() + 1}/{chapters.length}
        </Text> */}
        <View style={styles.changeChapterButton}>
          <Icon name="swap-horiz" size={24} color={colors.purple} />
          <Text
            style={{
              color: colors.purple,
              fontSize: 16,
              marginLeft: 8,
            }}>
            Change Chapter
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
  description: {
    color: colors.grayDark,
    fontWeight: 'bold',
    fontSize: 14,
    // marginBottom: 8,
  },
  chapterBox: {
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  chapterTitle: {
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
  },
  chapterProgress: {
    color: colors.grayDark,
    fontSize: 18,
    marginTop: 4,
  },
  changeChapterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    borderWidth: 1,
    borderColor: colors.purple,
    padding: 4,
    borderRadius: 8,
  },
});
