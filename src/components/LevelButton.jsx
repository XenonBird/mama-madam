import {useEffect, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text} from 'react-native';
import S_, {colors} from '../globalStyles';

const LevelButton = ({
  desabled = false,
  action,
  text = '',
  pointing = false,
}) => {
  const borderAnim = useRef(new Animated.Value(8)).current;
  const fingerAnim = useRef(new Animated.Value(0)).current;

  const onPressIn = () => {
    Animated.timing(borderAnim, {
      toValue: 2,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(borderAnim, {
      toValue: 8,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (pointing) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fingerAnim, {
            toValue: -20,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(fingerAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }
  }, [pointing]);

  return (
    <Pressable
      disabled={desabled}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={desabled ? () => {} : action}>
      <Animated.View
        style={[
          styles.levelBox,
          {
            opacity: desabled ? 0.2 : 1,
            borderBottomWidth: borderAnim,
            position: 'relative',
          },
        ]}>
        <Text style={styles.levelBoxText}>{text}</Text>
        {pointing && (
          <Animated.Image
            source={require('../asset/images/down_finger.png')}
            style={[
              styles.finger,
              S_.shadow,
              {
                transform: [{translateY: fingerAnim}, {translateX: -40}],
              },
            ]}
          />
        )}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  levelBox: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    borderWidth: 2,
    borderBottomWidth: 8,
    borderColor: colors.black,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  levelBoxText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  finger: {
    position: 'absolute',
    top: '-50%',
    left: '50%',
    width: 80,
    height: 80,
    // transform: [{translateX: '-100%'}],
  },
});

export default LevelButton;
