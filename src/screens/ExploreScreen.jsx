// /src/screens/ExporeSreen.jsx
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import S_, {colors} from '../globalStyles';

const ExporeSreen = ({navigation}) => {
  return (
    <SafeAreaView style={[S_.container]}>
      <StatusBar barStyle={'dark-content'} />

      <ScrollView style={{flex: 1, padding: 20, width: '100%'}}>
        {/* /////////////////////////////// */}

        <HomeSection />
        <HomeSection />
        <HomeSection />
        <HomeSection />
        <HomeSection />
        <HomeSection />

        {/* /////////////////////////////// */}
      </ScrollView>
    </SafeAreaView>
  );
};

const HomeSection = () => {
  return (
    <View style={[S_.container, styles.massageBox]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../asset/images/pear.png')} // Change image to something related to Home
          style={{width: 80, height: 80}}
          resizeMode="contain"
        />
        <View style={{flex: 1, padding: 0}}>
          <Text
            style={[S_.largeText, {color: colors.black, textAlign: 'left'}]}>
            Welcome Home
          </Text>
          <Text style={[S_.medium, {color: colors.black, textAlign: 'left'}]}>
            Let's explore more!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  massageBox: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 2,
    width: '100%',
  },
});

export default ExporeSreen;
