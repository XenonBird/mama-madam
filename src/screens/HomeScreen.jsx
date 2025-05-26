// /src/screens/HomeScreen.jsx
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import S_, {colors} from '../globalStyles';
import RoadMap from '../components/RoadMap';
import SubjectStatusBar from '../components/SunjectsStatusBar';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[S_.container]}>
      <StatusBar barStyle={'dark-content'} />

      <SubjectStatusBar onSelect={id => console.log('Clicked:', id)} />

      <RoadMap navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
