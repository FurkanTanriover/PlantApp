import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
const GetStarted = () => {
  // const _titleSectionWidth = horizontalScale(300);
  // const _titleSectionHeight = verticalScale(85);
  // const _titleSectionFontSize = moderateScale(28);
  // const _titleSectionDescriptionFontSize = moderateScale(16);
  // const _cameraLineImageWidth = horizontalScale(320);
  // const _cameraLineImageHeight = verticalScale(269);
  // const _getStartedImageWidth = horizontalScale(375);
  // const _getStartedImageHeight = verticalScale(499);
  // const _legalSectionFontSize = moderateScale(11);
  // const _legalSectionWidth = horizontalScale(232);
  // const _legalSectionHeight = verticalScale(30);
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1">
      {/* title section */}
      <View
        className={`mx-8 w-[300px] h-[85px] flex text-center justify-center`}>
        <Text className={`text-[28px] font-rubikRegular`}>
          Welcome to <Text className="font-rubikBold">PlantApp</Text>{' '}
        </Text>
        <Text className={`text-[16px] pt-2 opacity-70  font-rubikRegular`}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>
      {/* image section */}
      <View className="mt-[24] flex justify-center items-center">
        <Image
          source={require('../assets/images/camera-line.png')}
          className={`w-[320px] h-[269px] top-12 absolute z-10`}
        />
        <Image
          source={require('../assets/images/get-started.png')}
          className={`w-[375px] h-[499px]`}
        />
      </View>
      {/* bottom section */}
      <View className="flex justify-center flex-col items-center ">
        <Button
          title="Get Started"
          onClick={() => {
            navigation.navigate('Onboarding');
          }}
        />
        {/* legal section */}
        <View className={`w-[232px] h-[30px] mt-[17px]`}>
          <Text className="text-[11px] text-center font-rubikRegular  opacity-70">
            By tapping next, you are agreeing to PlantID Terms of Use & Privacy
            Policy.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
