import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../globalStyles';

const LessonProgressCard = ({lessonNumber, subtitle, percentage}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftBox}>
        <Text style={styles.title}>Bengali lesson - {lessonNumber}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.rightBox}>
        <Text style={styles.percentage}>{percentage}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 150,
    borderRadius: 12,
    overflow: 'hidden',
    height: 250,
    padding: 20,
    paddingVertical: 20,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  leftBox: {
    flex: 3,
  },
  rightBox: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.black,
    fontSize: 18,
    marginTop: 2,
  },
  percentage: {
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default LessonProgressCard;
