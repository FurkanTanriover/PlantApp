import {
  GET_PLANT_CATEGORIES,
  GET_PLANT_QUESTIONS,
  SET_ONBOARDING_STATUS,
} from '../utils/constants';
import {saveOnboardingStatus} from '../utils/storage';

const initialState = {
  showOnboarding: true,
  plantCategories: [],
  plantQuestions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ONBOARDING_STATUS:
      saveOnboardingStatus(action.payload);
      return {
        ...state,
        showOnboarding: action.payload,
      };
    case GET_PLANT_CATEGORIES:
      return {
        ...state,
        plantCategories: action.payload,
      };
    case GET_PLANT_QUESTIONS:
      return {
        ...state,
        plantQuestions: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
