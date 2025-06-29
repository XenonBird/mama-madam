// SubjectCardsRow.jsx
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {colors} from '../globalStyles';

// Subject icons mapping for better visual representation
const subjectIcons = {
  Bengali: '🔤',
  English: '📚',
  Math: '🔢',
  Science: '🔬',
};

export const SubjectCard = ({
  title,
  backgroundColor,
  progress = 0,
  isLocked = false,
  onPress,
}) => {
  const icon = subjectIcons[title] || title[0];

  return (
    <TouchableOpacity
      style={[styles.subjectCard, {backgroundColor: backgroundColor}]}
      onPress={onPress}
      disabled={isLocked}
      activeOpacity={0.8}>
      {/* Progress indicator */}
      {!isLocked && progress > 0 && (
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, {width: `${progress}%`}]} />
          </View>
        </View>
      )}
      {/* Lock indicator */}
      {isLocked && (
        <View style={styles.lockIndicator}>
          <Text style={styles.lockIcon}>🔒</Text>
        </View>
      )}

      {/* Subject icon */}
      <View style={styles.iconContainer}>
        <Text style={styles.subjectIcon}>{icon}</Text>
      </View>

      {/* Subject title */}
      <Text style={[styles.subjectTitle, isLocked && styles.lockedText]}>
        {title}
      </Text>

      {/* Progress text */}
      {!isLocked && progress > 0 && (
        <Text style={styles.progressText}>{progress}% Complete</Text>
      )}
    </TouchableOpacity>
  );
};

export default function SubjectCardsRow({
  subjects,
  currentSubjectId,
  selectSubjectId,
}) {
  const handleSubjectPress = sid => {
    console.log(`${sid} pressed`);
    Alert.alert('Subject Selected', 'This is ' + sid);
    selectSubjectId(sid);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Choose a Subject</Text>
      <ScrollView
        contentContainerStyle={styles.cardsContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {subjects.map(subject => (
          <SubjectCard
            key={subject.id}
            title={subject.name}
            backgroundColor={subject.color}
            progress={75}
            onPress={() => handleSubjectPress(subject.id)}
          />
        ))}

        <>
          <SubjectCard
            title="Bengali"
            subtitle="Language"
            backgroundColor="#667EEA"
            progress={75}
            isLocked={true}
            onPress={() => {}}
          />
          <SubjectCard
            title="English"
            subtitle="Literature"
            backgroundColor="#48BB78"
            progress={60}
            isLocked={true}
            onPress={() => {}}
          />
          <SubjectCard
            title="English"
            subtitle="Literature"
            backgroundColor="#48BB78"
            progress={60}
            isLocked={true}
            onPress={() => {}}
          />
          <SubjectCard
            title="Math"
            subtitle="Numbers"
            backgroundColor="#ED8936"
            progress={45}
            isLocked={true}
            onPress={() => {}}
          />
          <SubjectCard
            title="Science"
            subtitle="Discovery"
            backgroundColor="#9F7AEA"
            isLocked={true}
            onPress={() => {}}
          />
        </>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 16},
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    paddingHorizontal: 4,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
    gap: 8,
  },
  subjectCard: {
    width: 100,
    aspectRatio: 0.8,
    borderRadius: 16,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // Enhanced shadow for better depth
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  lockedCard: {
    opacity: 0.6,
    backgroundColor: '#A0AEC0',
  },
  progressContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
    right: 8,
  },
  progressBar: {
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 2,
  },
  lockIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  lockIcon: {
    fontSize: 24,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 12,
  },
  subjectIcon: {
    fontSize: 18,
  },
  subjectTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
  subjectSubtitle: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 4,
  },
  progressText: {
    fontSize: 9,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },
  lockedText: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
