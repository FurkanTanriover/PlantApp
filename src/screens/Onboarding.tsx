/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {FC, useRef, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
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
  const flatListRef = useRef<FlatList>(null);

  const handleOnboardingComplete = async () => {
    dispatch(setOnboardingStatus(false));
    navigation.navigate('PaywallScreen');
  };

  const onViewChange = (index: number) => {
    setStep(index);
  };

  const renderOnboardingItem = ({
    item,
    index,
  }: {
    item: number;
    index: number;
  }) => {
    return index === 0 ? <View1 /> : <View2 />;
  };

  const handleButtonPress = () => {
    if (isLastStep) {
      handleOnboardingComplete();
    } else {
      flatListRef.current?.scrollToIndex({index: step + 1});
      setStep(step + 1);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        ref={flatListRef}
        data={stepDot}
        renderItem={renderOnboardingItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / horizontalScale(375),
          );
          onViewChange(newIndex);
        }}
      />
      {/* bottom section */}
      <View style={styles.bottomSection}>
        <Button
          title={isLastStep ? 'Start' : 'Continue'}
          onClick={handleButtonPress}
        />
        {/* step dot section */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 32,
          }}>
          {stepDot.map((item, index) => (
            <View
              key={index}
              style={{
                width: step === index ? 10 : 8,
                height: step === index ? 10 : 8,
                borderRadius: step === index ? 5 : 4,
                backgroundColor: step === index ? '#13231B' : '#13231B',
                opacity: step === index ? 1 : 0.25,
                marginHorizontal: 4,
              }}
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
