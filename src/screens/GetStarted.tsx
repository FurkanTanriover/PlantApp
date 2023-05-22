import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import {horizontalScale, verticalScale} from '../utils/metrics';

const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1">
      {/* title section */}
      <View style={styles.titleSection}>
        <Text className={'text-[28px] font-rubikRegular'}>
          Welcome to <Text className="font-rubikBold">PlantApp</Text>{' '}
        </Text>
        <Text className={'text-[16px] pt-2 opacity-70  font-rubikRegular'}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>
      {/* content section */}
      <View style={styles.contentSection}>
        <Image
          source={require('../assets/images/get-started.png')}
          resizeMode="contain"
          style={{
            justifyContent: 'flex-end',
            width: horizontalScale(375),
            height: verticalScale(489),
          }}
        />
      </View>
      {/* bottom section */}
      <View style={styles.bottomSection}>
        <Button
          title="Get Started"
          onClick={() => {
            navigation.navigate('Onboarding');
          }}
        />
        {/* legal section */}
        <View style={styles.legalSection}>
          <Text className="text-[11px] text-center font-rubikRegular  opacity-70">
            By tapping next, you are agreeing to PlantID{' '}
            <Text style={{textDecorationLine: 'underline'}}>Terms of Use</Text>{' '}
            &{' '}
            <Text style={{textDecorationLine: 'underline'}}>
              Privacy Policy.
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleSection: {
    marginLeft: horizontalScale(24),
    width: horizontalScale(300),
    height: verticalScale(85),
  },
  contentSection: {
    marginTop: verticalScale(80),
    height: verticalScale(500),
  },
  bottomSection: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: verticalScale(51),
    left: horizontalScale(25),
  },
  legalSection: {
    marginTop: verticalScale(17),
    width: horizontalScale(232),
    height: verticalScale(40),
  },
});

export default GetStarted;
