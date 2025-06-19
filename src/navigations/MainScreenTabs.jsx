import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import {colors} from '../globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const ExploreScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    }}>
    <Text style={{fontSize: 20, color: '#333'}}>Explore Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const MainScreenTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          elevation: 0,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        animation: 'shift',
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.black,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="th"
              style={{
                width: 24,
                height: 24,
                fontSize: 24,
                tintColor: colors.primaryDark,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="lightbulb"
              style={{
                width: 24,
                height: 24,
                fontSize: 24,
                tintColor: colors.primaryDark,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="user"
              style={{
                width: 24,
                height: 24,
                fontSize: 24,
                tintColor: colors.primaryDark,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreenTabs;
