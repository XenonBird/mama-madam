import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export const SubjectCard = ({
  title,
  subtitle,
  backgroundColor,
  textColor = '#FFF',
}) => {
  return (
    <TouchableOpacity style={[styles.subjectCard, {backgroundColor}]}>
      <View style={styles.subjectIconContainer}>
        <Text style={[styles.subjectIcon, {color: textColor}]}>
          {title === 'Bengali'
            ? 'বাং'
            : title === 'English'
            ? 'ab'
            : title === 'Math'
            ? 'M+'
            : 'বেং'}
        </Text>
      </View>
      <Text style={[styles.subjectTitle, {color: textColor}]}>{title}</Text>
      {subtitle && (
        <Text style={[styles.subjectSubtitle, {color: textColor}]}>
          {subtitle}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default function SubjectCardsRow() {
  return (
    <View style={styles.cardsContainer}>
      <SubjectCard title="Bengali" backgroundColor="#8B5CF6" />
      <SubjectCard
        title="English"
        subtitle="ab"
        backgroundColor="#FCD34D"
        textColor="#000"
      />
      <SubjectCard title="Math" subtitle="M+" backgroundColor="#F472B6" />
      <SubjectCard title="Bengali" backgroundColor="#10B981" />
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  subjectCard: {
    width: '22%',
    aspectRatio: 0.75,
    borderRadius: 12,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectIconContainer: {
    marginBottom: 8,
  },
  subjectIcon: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subjectTitle: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  subjectSubtitle: {
    fontSize: 10,
    marginTop: 2,
    textAlign: 'center',
  },
});
