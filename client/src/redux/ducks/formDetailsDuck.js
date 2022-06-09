import { SET_FORM_DETAILS} from '../action.types';

// Initial State
const initialUserState = null;

// Actions
export const setFormDetails = (formData) => ({
  type: SET_FORM_DETAILS,
  formData,
});

// Form Details Reducer
const formDetailsReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_FORM_DETAILS:
      return action.formData;
    default:
      return state;
  }
};

export default formDetailsReducer;
