import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import {colors} from '../globalStyles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // Simulate loading, then navigate to MainStack
    const timer = setTimeout(() => {
      navigation.replace('Main'); // Replace 'Main' with your main navigator name
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.2)"
        translucent
      />
      <Image
        source={require('../asset/images/fox-hi.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Learning App!</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 60,
  },
});
