import { POKEMON_DETAIL } from '../actions';

export default (detail = null, action) => {
  switch (action.type) {
    case POKEMON_DETAIL.REQUEST:
      return null;
    case POKEMON_DETAIL.SUCCESS:
      return action.payload;
    default:
      return detail
  }
};
