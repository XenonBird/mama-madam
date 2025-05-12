import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MCQLesson from '../components/lesson.jsx/MCQ';
import {SafeAreaView} from 'react-native-safe-area-context';
import S_, {colors} from '../globalStyles';
import ProgressBar from '../components/ProgressBar';

const questions = [
  {
    id: 1,
    type: 'mcq',
    questionLine: 'Which city is the capital of France?',
    options: [
      {id: 1, label: 'Paris', icon: '🇫🇷'},
      {id: 2, label: 'London', icon: '🇬🇧'},
      {id: 3, label: 'Berlin', icon: '🇩🇪'},
      {id: 4, label: 'Madrid', icon: '🇪🇸'},
    ],
    answer: 1,
  },
  {
    id: 2,
    type: 'mcq',
    questionLine: 'What is the capital of Spain?',
    options: [
      {id: 1, label: 'Paris', icon: '🇫🇷'},
      {id: 2, label: 'London', icon: '🇬🇧'},
      {id: 3, label: 'Berlin', icon: '🇩🇪'},
      {id: 4, label: 'Madrid', icon: '🇪🇸'},
    ],
    answer: 4,
  },
  {
    id: 3,
    type: 'mcq',
    questionLine: 'What is the capital of Germany?',
    options: [
      {id: 1, label: 'Paris', icon: '🇫🇷'},
      {id: 2, label: 'London', icon: '🇬🇧'},
      {id: 3, label: 'Berlin', icon: '🇩🇪'},
      {id: 4, label: 'Madrid', icon: '🇪🇸'},
    ],
    answer: 3,
  },
];

const LessonScreen = ({navigation, route}) => {
  const {lessonNumber} = route.params || {};
  const [questionNumber, setQuestionNumber] = useState(0);
  const [outcomes, setOutcomes] = useState([]);
  const [continueButton, setContinueButton] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSelect = id => {
    // prevent double selection
    if (selected !== null) return;

    setSelected(id);
    const question = questions[questionNumber];
    const correct = id === question.answer;
    setIsCorrect(correct);

    const newOutcomes = [...outcomes, {question: question.id, answer: correct}];
    setOutcomes(newOutcomes);
    setContinueButton(true); // Allow to continue regardless of the correctness
  };

  const handleContinue = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber(prev => prev + 1);
      setSelected(null);
      setIsCorrect(null);
      setContinueButton(false);
    } else {
      Alert.alert('Lesson completed!');
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={[S_.container]}>
      <StatusBar barStyle={'dark-content'} />

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          padding: 20,
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            width: '100%',
          }}>
          <Text style={styles.sectionTitle}>
            Lesson no. {lessonNumber ?? 'N/A'}
          </Text>
          <Icon
            name="times"
            size={30}
            color={colors.black}
            onPress={() => navigation.goBack()}
          />
        </View>

        <ProgressBar
          currentStep={questionNumber + 1}
          totalStepNumbers={questions.length}
        />

        <MCQLesson
          selected={selected}
          handleSelect={handleSelect}
          question={questions[questionNumber]}
          isCorrect={isCorrect}
        />

        <TouchableOpacity
          style={[
            S_.buttonPrimary,
            S_.shadow,
            {opacity: !continueButton ? 0.2 : 1},
          ]}
          disabled={!continueButton}
          onPress={handleContinue}>
          <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueButton: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 3,
    backgroundColor: colors.primary,
  },
  continueText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
});

export default LessonScreen;
