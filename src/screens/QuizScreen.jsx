/* eslint-disable react-native/no-inline-styles */
import {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
  const [questions, setQuestions] = useState(
    dummyData.subjects[0].chapters[0].lessons[0].questions,
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(
    Array(questions.length).fill({
      isSelected: false,
      isCorrect: false,
      selectedOption: null,
    }),
  );

  if (currentQuestion >= questions.length) {
    return (
      <GoBackPage
        points={points}
        goBack={() => {
          setCurrentQuestion(null);
          navigation.goBack();
        }}
      />
    );
  }

  const handleOptionSelect = id => {
    const pointUpdate = [...points];
    pointUpdate[currentQuestion] = {
      isSelected: true,
      isCorrect: questions[currentQuestion].answerId === id,
      selectedOption: id,
    };
    setPoints(pointUpdate);
  };

  // const allAnswersShort = questions[currentQuestion].options.every(
  //   option => option.text.length < 20,
  // );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={'#00000000'} />
      <ScrollView style={styles.content}>
        <QuizHeader
          navigation={navigation}
          onClose={() => navigation.goBack()}
          leftItem={currentQuestion + 1 + '/' + questions.length}
        />

        <ProgressBar
          currentStep={currentQuestion + 1}
          totalSteps={questions.length}
        />

        {/* <QuizIllustration /> */}

        {/* Question */}
        <QuizQuestion question={questions[currentQuestion].question} />

        {/* Answer options */}
        <View style={styles.optionsContainer}>
          {questions[currentQuestion].options.map(option => {
            var buttonVarient = 'secondary';
            if (points[currentQuestion].isSelected) {
              if (option.id === points[currentQuestion].selectedOption) {
                buttonVarient = 'incorrect';
              }
              if (option.id === questions[currentQuestion].answerId) {
                buttonVarient = 'correct';
              }
            }

            return (
              <Button
                title={option.text}
                key={option.id}
                style={{paddingVertical: 20}}
                onPress={() =>
                  !points[currentQuestion].isSelected &&
                  handleOptionSelect(option.id)
                }
                variant={buttonVarient}
              />
            );
          })}
        </View>

        {/* Next Button */}
        {points[currentQuestion].isSelected && (
          <Button
            backgroundColor={colors.yellow}
            shadowColor={colors.yellowDark}
            textStyle={{color: colors.black}}
            style={{marginVertical: 32, paddingVertical: 16}}
            onPress={() => setCurrentQuestion(currentQuestion + 1)}
            title={'Next'}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const GoBackPage = ({goBack, points}) => {
  const correctAnswers = points.filter(p => p.isCorrect).length;
  const totalQuestions = points.length;
  const numberOfStars = Math.floor((correctAnswers / totalQuestions) * 3);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={'#00000000'} />
      <ScrollView style={styles.content}>
        <QuizHeader navigation={{goBack}} onClose={goBack} leftItem={' '} />

        {/* Small title */}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: colors.white}}>
            Quiz Completed!
          </Text>

          {/* This is not working. dont know why */}
          <ProgressBar
            currentStep={correctAnswers}
            totalSteps={totalQuestions}
            progressColor={colors.green}
          />

          {/* Stars */}
          <View style={styles.starsContainer}>
            {[1, 2, 3].map(star => (
              <FontAwesome
                key={star}
                name={star <= numberOfStars ? 'star' : 'star-o'}
                size={80}
                color={
                  star <= numberOfStars ? colors.yellowDark : colors.grayMedium
                }
                style={styles.starIcon}
              />
            ))}
          </View>

          {/* Obtained marks */}
          <Text
            style={{
              fontSize: 64,
              color: colors.white,
              fontWeight: 900,
              marginVertical: 16,
            }}>
            {correctAnswers}/{totalQuestions}
          </Text>
        </View>

        {/* Return button */}
        <Button
          title="Go Back"
          onPress={goBack}
          style={{marginVertical: 32, paddingVertical: 16}}
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

  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 3,
  },
  starIcon: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 1,
    marginHorizontal: 5,
  },
});

export default QuizScreen;
