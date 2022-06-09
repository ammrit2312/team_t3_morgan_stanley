import { SET_USER, RESET_USER, SET_FORM_FILLED } from "../action.types";

// Initial State
const initialUserState = null;

// Actions
export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const resetUser = () => ({
  type: RESET_USER,
});

export const setFormFilled = (status) => ({
  type: SET_FORM_FILLED,
  status,
});
/**
 * A set user contains the following fields:
 * uid
 * email
 * formFilled : true/false
 * accountType: volunteer/admin
 */

// User Reducer
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case SET_FORM_FILLED:
      return {
        ...state,
        formFilled: action.status,
      }
    case RESET_USER:
      return initialUserState;
    default:
      return state;
  }
};

export default userReducer;
