import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../utils/metrics';
interface InputProps {
  search?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({search, placeholder}) => {
  return (
    <View style={styles.container}>
      {search && (
        <Image
          style={styles.icon}
          source={require('../assets/icons/search.png')}
        />
      )}
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: verticalScale(48),
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    borderWidth: 0.2,
    borderColor: 'rgba(60, 60, 67, 0.25)',
    backdropFilter: 'blur(2.5px)',
    borderRadius: moderateScale(12),
    paddingHorizontal: horizontalScale(16),
  },
  icon: {
    marginRight: 8,
    width: moderateScale(20),
    height: moderateScale(20),
    color: '#000',
  },
  input: {
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
    fontSize: moderateScale(16),
    flex: 1,
  },
});

export default Input;
