import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../globalStyles';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.nameText}>Raihan Ali</Text>
      </View>
      <View style={styles.profileIcon}>
        <Icon name="person" size={24} color="#FFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: colors.blue,
    paddingHorizontal: 16,
  },
  welcomeText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FCD34D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold',
  },
});
