import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import {colors} from '../globalStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const ProgressScreen = () => (
  <View
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    }}>
    <Text style={{fontSize: 20, color: '#333'}}>ProgressScreen</Text>
  </View>
);

const MySchool = () => (
  <View
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    }}>
    <Text style={{fontSize: 20, color: '#333'}}>MySchool</Text>
  </View>
);

const Collections = () => (
  <View
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    }}>
    <Text style={{fontSize: 20, color: '#333'}}>Collections</Text>
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
        tabBarActiveTintColor: colors.purpleDark,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'home-variant' : 'home-variant-outline'}
              style={{
                width: 24,
                height: 24,
                fontSize: 24,
                color: focused ? colors.purpleDark : colors.grayDark,
              }}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Collections"
        component={Collections}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'dots-grid' : 'dots-grid'}
              style={{
                width: 24,
                height: 24,
                fontSize: 24,
                color: focused ? colors.purpleDark : colors.grayDark,
              }}
            />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'chart-box' : 'chart-box-outline'}
              style={{
                width: 24,
                height: 24,
                fontSize: 24,
                color: focused ? colors.purpleDark : colors.grayDark,
              }}
            />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="MySchool"
        component={MySchool}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'bank' : 'bank-outline'}
              style={{
                width: 24,
                height: 24,
                fontSize: 24,
                color: focused ? colors.purpleDark : colors.grayDark,
              }}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'baby-face' : 'baby-face-outline'}
              style={{
                width: 24,
                height: 24,
                fontSize: 24,
                color: focused ? colors.purpleDark : colors.grayDark,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreenTabs;
