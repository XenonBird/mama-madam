// /src/screens/WelcomeScreen.jsx
import {Image, Pressable, StatusBar, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import S_, {colors} from '../globalStyles';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={S_.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />

      <View style={[S_.container, {marginBottom: 50}]}>
        <Image
          source={require('../asset/images/pear.png')}
          style={{width: 300, height: 300}}
          resizeMode="contain"
        />

        <Text style={S_.largeText}>🌟 Welcome 🌟</Text>
        <Text style={S_.medium}>Learning is now a fun adventure!</Text>

        <Pressable
          style={S_.buttonPrimary}
          onPress={() => {
            navigation.navigate('Main');
          }}>
          <Text style={[S_.largeText, S_.shadow, {color: colors.black}]}>
            Let's start
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
