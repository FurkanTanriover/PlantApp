import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

const View2 = () => {
  return (
    <View>
      {/* title section */}
      <View style={styles.titleSection}>
        <Text style={styles.titleText} className={' font-rubikRegular'}>
          Get plant <Text className={' font-rubikBold'}>care guides</Text>
        </Text>
        <Image
          source={require('../../assets/images/brush.png')}
          className={' absolute top-[38px] left-[130px]'}
        />
      </View>
      {/* content section */}
      <View style={styles.contentSection}>
        <Image
          resizeMode="stretch"
          style={{
            position: 'absolute',
            width: horizontalScale(375),
            height: verticalScale(600),
          }}
          source={require('../../assets/images/blur.png')}
        />
        <Image
          resizeMode="contain"
          style={{
            width: horizontalScale(375),
            height: verticalScale(600),
          }}
          source={require('../../assets/images/onboarding-2.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleSection: {
    marginLeft: horizontalScale(24),
    width: horizontalScale(315),
    height: verticalScale(66),
  },
  contentSection: {
    height: verticalScale(600),
    justifyContent: 'flex-start',
  },
  titleText: {
    fontSize: moderateScale(28),
  },
});

export default View2;
