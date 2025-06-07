import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyApp!</Text>
      <Text style={styles.subtitle}>This is the Welcome Screen.</Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.subtitle}>
          Click here to start exploring the app.
        </Text>
        <Button
          title="Let's GO!!!"
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
});

export default WelcomeScreen;
