import { UPDATE_NAVIGATION, POKEMON_LIST } from '../actions';

const initialState = {
  previous: null,
  next: null,
  count: 0
};

export default (navigation = initialState, action) => {
  switch (action.type) {
    case POKEMON_LIST.REQUEST:
      return initialState;
    case UPDATE_NAVIGATION:
      return action.payload;
    default:
      return navigation
  }
};
