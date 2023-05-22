import {get} from '../utils/api';
import {
  BASE_URL,
  GET_PLANT_CATEGORIES,
  GET_PLANT_QUESTIONS,
  SET_ONBOARDING_STATUS,
  SET_PAYWALL_STATUS,
} from '../utils/constants';

export const setOnboardingStatus = status => ({
  type: SET_ONBOARDING_STATUS,
  payload: status,
});

export const setPaywallStatus = status => ({
  type: SET_PAYWALL_STATUS,
  payload: status,
});

export const getPlantCategories = dispatch => {
  return get(BASE_URL.concat('getCategories'), dispatch, GET_PLANT_CATEGORIES);
};

export const getPlantQuestions = dispatch => {
  return get(BASE_URL.concat('getQuestions'), dispatch, GET_PLANT_QUESTIONS);
};
