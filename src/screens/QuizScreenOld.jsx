import {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../globalStyles';
import Button from '../components/Button';
import {
  OptionButton,
  ProgressBar,
  QuizHeader,
  QuizQuestion,
} from '../components/QuizComponents';

import dummyData from '../data/dummyData';

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
      <StatusBar translucent backgroundColor={'#00000000'} />
      <ScrollView style={styles.content}>
        <QuizHeader
          navigation={navigation}
          onClose={() => navigation.goBack()}
        />

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

        <Button
          onPress={handleNext}
          title={'Next'}
          disabled={!selectedOption}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },
  content: {
    flex: 1,
    minHeight: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 15,
    paddingVertical: 20,
  },
});

export default QuizScreen;
