import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import SubjectCardsRow from '../components/SubjectCardsRow';
import {CurrentChapter} from '../components/CurrentChapter';
import {LevelsGrid} from '../components/LevelsGrid';
import Hi from '../components/Hi';
import {colors} from '../globalStyles';
import {dummyData} from '../data/dummyData';

// Main App Component
const HomeScreen = ({navigation}) => {
  const [subject, setSubject] = useState(dummyData.subjects[0]);
  const [chapter, setChapter] = useState(subject.chapters[0]);

  // console.log('🟡🟡🟡', {subject, chapter});
  // console.log('🟡🟡🟡', subject.chapters.filter(c => c === chapter)[0]);

  const handleSubjectChange = subjectId => {
    const newSubject = dummyData.subjects.filter(s => s.id === subjectId)[0];
    setSubject(newSubject);
    setChapter(newSubject.chapters[0]);
  };

  const handleChapterChange = chapterId => {
    const newChapter = subject.chapters.filter(c => c.id === chapterId)[0];
    setChapter(newChapter);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.2)"
        translucent
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {/* <Header /> */}

        <Hi />
        <View style={{paddingHorizontal: 16}}>
          <SubjectCardsRow
            subjects={dummyData.subjects}
            currentSubjectId={subject.id}
            selectSubjectId={handleSubjectChange}
          />
          <CurrentChapter
            chapters={subject.chapters}
            currentChapterId={chapter.id}
            handleChapterChange={handleChapterChange}
          />

          {/* <Button title={subject.name} />
          <Text>{JSON.stringify(chapter, null, 4)}</Text> */}

          <LevelsGrid lessons={chapter.lessons} navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 0,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background, // <-- Use shared color
  },
});

export default HomeScreen;
