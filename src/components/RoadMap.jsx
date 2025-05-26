// /src/components/RoadMap.jsx
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import S_, {colors} from '../globalStyles';
import LevelButton from './LevelButton';
import LessonProgressCard from './LessonProgressCard';

const pathRadius = 99;
const pathWidth = 6;
const pathColor = colors.black;
const pathColorDesabled = colors.gray;

const RoadMap = ({navigation, numberOfLevels = 6, playerAt = 3}) => {
  return (
    <ScrollView style={S_.scrollContainer}>
      {/* <Heading /> */}

      <LessonProgressCard
        lessonNumber="04"
        subtitle="Letter pronunciation - অ - ঔ"
        percentage={72}
      />

      <View style={styles.levelBoxWithPath}>
        <Path numberOfLevels={numberOfLevels} playerAt={playerAt} />

        <Levels
          numberOfLevels={numberOfLevels}
          playerAt={playerAt}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

const Heading = () => {
  return (
    <View
      style={[
        S_.container,
        {
          marginBottom: 20,
          padding: 20,
          backgroundColor: colors.primary,
          borderRadius: 20,
          borderWidth: 3,
          borderColor: colors.black,
          width: '100%',
        },
      ]}>
      <Text style={[S_.largeText, {textAlign: 'left', color: colors.black}]}>
        Hello Minhaj
      </Text>
    </View>
  );
};

const Path = ({numberOfLevels, playerAt}) => {
  return (
    <View style={[S_.container, styles.pathContainer]}>
      {new Array(numberOfLevels - 1)
        .fill(0)
        .map((_, i) =>
          i % 2 === 0 ? (
            <View
              key={i}
              style={[
                styles.pathBox,
                styles.pathBoxRight,
                {borderColor: playerAt - 1 > i ? pathColor : pathColorDesabled},
              ]}
            />
          ) : (
            <View
              key={i}
              style={[
                styles.pathBox,
                styles.pathBoxLeft,
                {borderColor: playerAt - 1 > i ? pathColor : pathColorDesabled},
              ]}
            />
          ),
        )}
    </View>
  );
};

const Levels = ({numberOfLevels, navigation, playerAt}) => {
  return (
    <View style={[S_.container, styles.levelsContainer]}>
      {new Array(numberOfLevels).fill(0).map((_, i) => (
        <LevelButton
          key={i}
          action={() => navigation.navigate('Lesson', {lessonNumber: i + 1})}
          text={i + 1}
          desabled={i + 1 > playerAt}
          pointing={i + 1 === playerAt}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  levelBoxWithPath: {marginBottom: 30},
  pathContainer: {
    position: 'absolute',
    marginBottom: 20,
    marginTop: 80 / 2 - pathWidth / 2,
    paddingBottom: pathWidth,
  },
  pathBox: {
    borderWidth: pathWidth,
    borderColor: pathColor,
    height: 120 - pathWidth,
    width: 150,
    marginBottom: -pathWidth,
  },
  pathBoxLeft: {
    transform: [{translateX: '-50%'}],
    borderTopLeftRadius: pathRadius,
    borderBottomLeftRadius: pathRadius,
    borderRightWidth: 0,
  },
  pathBoxRight: {
    transform: [{translateX: '50%'}],
    borderTopRightRadius: pathRadius,
    borderBottomRightRadius: pathRadius,
    borderLeftWidth: 0,
  },
  levelsContainer: {
    backgroundColor: 'transparent',
    gap: 20 - 2, // adjust for the path width
  },
});

export default RoadMap;
