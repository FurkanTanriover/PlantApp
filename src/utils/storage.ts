// src/utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ONBOARDING_KEY} from './constants';

export const saveOnboardingStatus = async (status: boolean) => {
  try {
    await AsyncStorage.setItem(ONBOARDING_KEY, JSON.stringify(status));
  } catch (error) {
    console.log('Error saving onboarding status:', error);
  }
};

export const loadOnboardingStatus = async () => {
  try {
    const status = await AsyncStorage.getItem(ONBOARDING_KEY);
    return status ? JSON.parse(status) : null;
  } catch (error) {
    console.log('Error loading onboarding status:', error);
    return null;
  }
};
