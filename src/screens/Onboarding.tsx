import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Button from '../components/Button';

import View1 from '../components/Onboarding/view1';
import View2 from '../components/Onboarding/view2';
import {horizontalScale, verticalScale} from '../utils/metrics';
//redux
import {useDispatch} from 'react-redux';
import {setOnboardingStatus} from '../redux/action';

interface OnboardingProps {}

const Onboarding: FC<OnboardingProps> = () => {
  const [step, setStep] = useState(0);
  const stepDot = [1, 2];
  const navigation = useNavigation();
  const isLastStep = step === 1;

  const dispatch = useDispatch();

  const handleOnboardingComplete = async () => {
    dispatch(setOnboardingStatus(false));
    navigation.navigate('PaywallScreen');
  };

  return (
    <SafeAreaView className="flex-1">
      {/* content section */}
      {step === 0 ? <View1 /> : <View2 />}
      {/* bottom section */}
      <View style={styles.bottomSection}>
        <Button
          title={step === 0 ? 'Continue' : 'Start'}
          onClick={() => {
            if (isLastStep) {
              handleOnboardingComplete();
              return;
            }
            setStep(step + 1);
          }}
        />
        {/* step dot section */}
        <View className="flex flex-row justify-center items-center mt-[32px]">
          {stepDot.map((item, index) => (
            <View
              key={index}
              className={`${
                step === index ? 'w-[10px] h-[10px]' : 'w-[8px] h-[8px]'
              }  rounded-full ${
                step === index ? 'bg-[#13231B]' : 'bg-[#13231B] opacity-25'
              } mx-[4px]`}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomSection: {
    position: 'absolute',
    bottom: verticalScale(60),
    left: horizontalScale(25),
  },
});

export default Onboarding;
