// /src/components/RoadMap.jsx
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import S_, {colors} from '../globalStyles';
import LevelButton from './LevelButton';

const RoadMap = ({navigation}) => {
  return (
    <SafeAreaView style={[S_.container]}>
      <StatusBar barStyle={'dark-content'} />

      <ScrollView style={{flex: 1, padding: 20, width: '100%'}}>
        {/* /////////////////////////////// */}
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
          <Text
            style={[S_.largeText, {textAlign: 'left', color: colors.black}]}>
            Hello Minhaj
          </Text>
        </View>

        <Path navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const Path = ({navigation}) => {
  return (
    <View style={[S_.container, styles.levelsContainer]}>
      {new Array(22).fill(0).map((_, i) => (
        <LevelButton
          key={i}
          action={() => navigation.navigate('Lesson', {lessonNumber: i + 1})}
          text={i + 1}
          desabled={i > 10}
          pointing={i + 1 === 11}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  levelsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 20,
  },
});

export default RoadMap;
