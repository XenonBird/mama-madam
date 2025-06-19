import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import Button from './Button';
import {colors} from '../globalStyles'; // <-- Add this import

const Hi = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentBox}>
        <Image
          source={require('../asset/images/fox-hi.png')}
          style={{width: 130, height: 150}}
        />
        <View style={{alignItems: 'left', marginLeft: 20}}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              flexWrap: 'wrap',
              color: colors.white,
            }}>
            Hi! Raihan
          </Text>
          <Text style={{fontSize: 18, color: colors.grayLight}}>
            Great job! Keep it up.
          </Text>
        </View>
      </View>

      <Button
        title="Let's Start"
        size="large"
        backgroundColor={colors.yellow}
        shadowColor={colors.yellowDark}
        textStyle={{color: colors.black}}
        style={{marginTop: 16, paddingHorizontal: 32}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.purple, // <-- Use shared color
    width: '100%',
    padding: 30,
    paddingTop: 80,
    borderRadius: 40,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Hi;
