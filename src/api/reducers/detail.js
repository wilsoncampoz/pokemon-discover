import { POKEMON_DETAIL } from '../actions';

export default (detail = {}, action) => {
  switch (action.type) {
    case POKEMON_DETAIL.REQUEST:
      return {};
    case POKEMON_DETAIL.SUCCESS:
      return action.payload;
    default:
      return detail
  }
};
