import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {QuizHeader} from '../components/quiz/QuizHeader';
import {ProgressBar} from '../components/quiz/QuizProgressBar';
import {QuizQuestion} from '../components/quiz/QuizQuestion';
import {OptionButton} from '../components/quiz/OptionButtons';
import {NextButton} from '../components/quiz/NextButton';

const QuizScreen = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 7;

  const options = [
    {id: 'A', text: 'Bengali', color: '#FCD34D'},
    {id: 'B', text: 'English', color: '#FFFFFF'},
    {id: 'C', text: 'Math', color: '#FFFFFF'},
    {id: 'D', text: 'Hindi', color: '#F472B6'},
  ];

  const handleOptionSelect = optionId => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (selectedOption) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <QuizHeader navigation={navigation} onClose={navigation.goBack()} />

        <ProgressBar
          currentStep={currentQuestion}
          totalSteps={totalQuestions}
        />

        {/* <QuizIllustration /> */}

        <QuizQuestion
          question="Which subject do you love to read always?"
          subtitle="Select an option:"
        />

        <View style={styles.optionsContainer}>
          {options.map(option => (
            <OptionButton
              key={option.id}
              id={option.id}
              text={option.text}
              backgroundColor={option.color}
              isSelected={selectedOption === option.id}
              onPress={() => handleOptionSelect(option.id)}
            />
          ))}
        </View>

        <NextButton onPress={handleNext} disabled={!selectedOption} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B5CF6',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 15,
    paddingVertical: 20,
  },
});

export default QuizScreen;
