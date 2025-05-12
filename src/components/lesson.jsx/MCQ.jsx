import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import S_, {colors} from '../../globalStyles';
import HR from '../HR';

export default function MCQLesson(props) {
  const {question, selected, handleSelect, isCorrect} = props;
  const {options, questionLine} = question;

  return (
    <>
      {/* New Word + Prompt */}
      <Text style={[S_.largeText, {textAlign: 'left'}]}>{questionLine}</Text>

      <HR
        styleList={{
          backgroundColor: colors.gray,
          height: 3,
          marginVertical: 20,
        }}
      />
      <View style={styles.optionsContainer}>
        {options.map(opt => {
          const isThisSelected = selected === opt.id;
          const isAnswerCorrect = opt.id === question.answer;
          return (
            <TouchableOpacity
              key={opt.id}
              style={[
                styles.option,
                selected && isThisSelected && styles.optionIncorrect,
                selected && isAnswerCorrect && styles.optionCorrect, // overrides incorrect style
              ]}
              onPress={() => handleSelect(opt.id)}>
              <Text style={styles.optionIcon}>{opt.icon}</Text>
              <Text style={styles.optionLabel}>{opt.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  option: {
    width: '48%',
    height: 100,
    borderWidth: 4,
    borderColor: '#ddd',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
    aspectRatio: 1,
  },
  optionSelected: {
    borderColor: colors.secondary,
    backgroundColor: '#e0f2fe',
  },
  optionCorrect: {
    borderColor: 'green',
    backgroundColor: 'lightgreen',
  },
  optionIncorrect: {
    borderColor: 'red',
    backgroundColor: 'lightcoral',
  },
  optionIcon: {fontSize: 50},
  optionLabel: {marginTop: 6, fontSize: 24},
});
