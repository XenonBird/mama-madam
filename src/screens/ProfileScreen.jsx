import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import S_, {colors} from '../globalStyles';

const ProfileScreen = () => {
  const menuItems = [
    {label: 'Favourites', icon: 'heart'},
    {label: 'Downloads', icon: 'download'},
    {label: 'Language', icon: 'globe'},
    {label: 'Location', icon: 'map-marker-alt'},
    {label: 'Subscription', icon: 'dollar-sign'},
    {label: 'Clear Cache', icon: 'trash'},
    {label: 'Clear History', icon: 'history'},
    {label: 'Logout', icon: 'sign-out-alt', color: 'red'},
  ];

  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.white}}>
      <View style={{padding: 20}}>
        {/* Top Bar */}
        <View style={styles.header}>
          <Icon name="arrow-left" size={20} color={colors.black} />
          <Text style={[S_.medium, {fontSize: 22}]}>My Profile</Text>
          <Icon name="cog" size={20} color={colors.black} />
        </View>

        {/* Profile Info */}
        <View style={{alignItems: 'center', marginVertical: 20}}>
          <Image
            source={require('../asset/images/pear.png')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              borderColor: colors.primary,
              borderWidth: 3,
            }}
          />
          <Text style={[S_.largeText, {marginTop: 10}]}>John Doe</Text>
          <Text style={[S_.medium, {color: colors.darkGray, fontSize: 14}]}>
            johndoe@email.com
          </Text>

          <TouchableOpacity style={[S_.buttonPrimary, {paddingHorizontal: 20}]}>
            <Text style={{color: colors.white, fontWeight: 'bold'}}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name={item.icon}
                  size={16}
                  color={item.color || colors.black}
                  style={{width: 25}}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    color: item.color || colors.black,
                    fontSize: 16,
                  }}>
                  {item.label}
                </Text>
              </View>
              <Icon name="chevron-right" size={12} color={colors.darkGray} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
});

export default ProfileScreen;
