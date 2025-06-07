import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Current Lesson Component
export const CurrentLesson = () => {
  return (
    <View style={styles.currentLesson}>
      <View style={styles.lessonContent}>
        <Text style={styles.lessonTitle}>Bengali</Text>
        <Text style={styles.lessonSubtitle}>Lesson 2 &gt; ক - খ অনুশীলন</Text>
      </View>
      <TouchableOpacity>
        <Icon name="menu" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  currentLesson: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#C4B5FD',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  lessonContent: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  lessonSubtitle: {
    fontSize: 14,
    color: '#374151',
  },
});
