import {FlatList, StyleSheet, Text, View} from 'react-native';
import S_, {colors} from '../globalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const subjects = [
  {
    id: 'bangla',
    name: 'Bangla',
    iconName: 'alphabet-bengali',
    iconAlternativeText: 'অ',
    iconColor: colors.primaryDark,
  },
  {
    id: 'english',
    name: 'English',
    iconAlternativeText: 'Ab',
    iconName: 'alphabetical',
    iconColor: colors.secondary,
  },
  {
    id: 'math',
    name: 'Math',
    iconName: 'calculator',
    iconAlternativeText: 'Ab',
    iconColor: colors.accent,
  },
  {
    id: 'science',
    name: 'Science',
    iconName: 'atom',
    iconAlternativeText: 'Ab',
    iconColor: '#ef4444',
  },
  {
    id: 'add',
    name: 'Add New',
    iconName: 'plus',
    iconAlternativeText: 'Ab',
    iconColor: colors.darkGray,
    isAdd: true,
  },
];

const SunjectsStatusBar = () => {
  return (
    <FlatList
      data={subjects}
      horizontal
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={{justifyContent: 'flex-start'}}
      style={styles.statusBarContainer}
      renderItem={({item}) => {
        let iconAvailable = MaterialCommunityIcons.hasIcon?.(item.iconName);
        return (
          <View style={styles.subjectStatusContainer}>
            <View style={styles.subjectStatus}>
              {iconAvailable ? (
                <MaterialCommunityIcons
                  name={item.iconName}
                  style={{color: colors.black}}
                  size={42}
                />
              ) : (
                <Text style={{fontSize: 26, fontWeight: 'bold'}}>
                  {item.iconAlternativeText}
                </Text>
              )}
            </View>
            <Text>{item.name}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  statusBarContainer: {
    width: 'auto',
    maxHeight: 100,
    padding: 10,
    flex: 1,
    gap: 10,
    // justifyContent: 'flex-start',
  },
  subjectStatusContainer: {
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  subjectStatus: {
    borderWidth: 2,
    borderRadius: 99,
    width: 60,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});

export default SunjectsStatusBar;
