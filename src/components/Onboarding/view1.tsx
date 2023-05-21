import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../utils/metrics';

const View1 = () => {
  return (
    <View>
      {/* title section */}
      <View style={styles.titleSection}>
        <Text className={'text-[28px] font-rubikRegular'}>
          Take a photo to{' '}
          <Text className={'text-[28px] font-rubikBold'}>identify </Text> the
          plant!
        </Text>
        <Image
          source={require('../../assets/images/brush.png')}
          className={' absolute top-[36px] left-[176px]'}
        />
      </View>
      {/* content section */}
      <View style={styles.contentSection}>
        <Image
          source={require('../../assets/images/onboarding-1.png')}
          resizeMode="contain"
          style={{
            width: horizontalScale(375),
            height: verticalScale(640),
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleSection: {
    marginLeft: horizontalScale(24),
    width: horizontalScale(315),
    height: verticalScale(85),
  },
  contentSection: {
    height: verticalScale(400),
  },
});

export default View1;
