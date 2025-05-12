import {View} from 'react-native';

const HR = ({styleList}) => {
  return (
    <View
      style={[
        {
          backgroundColor: 'black',
          height: 1,
          width: '100%',
          marginVertical: 10,
          borderRadius: 10,
        },
        styleList,
      ]}
    />
  );
};

export default HR;
