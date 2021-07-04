import { RECEIVE_USER_INVESTMENT } from '../actions/investment';

const initialState = {
  email: '',
  amount: 0
};

const investment = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_USER_INVESTMENT:
      return {
        email: action.email,
        amount: action.amount
      };
    default:
      return state;
  }
};

export default investment;