import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setOnboardingStatus, setPaywallStatus} from '../redux/action';
import Button from '../components/Button';

const DiagnoseScreen = () => {
  const dispatch = useDispatch();

  const handleOnboardingComplete = async () => {
    dispatch(setOnboardingStatus(true));
    dispatch(setPaywallStatus(true));
  };
  return (
    <View style={styles.container}>
      <Text>Diagnose Screen</Text>
      <Button
        title="Onboard Flow Reset"
        onClick={() => handleOnboardingComplete()}
      />
    </View>
  );
};

export default DiagnoseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
