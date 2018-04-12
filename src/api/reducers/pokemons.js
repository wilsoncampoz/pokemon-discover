import { POKEMON_LIST } from '../actions';

export default (pokemons = [], action) => {
  switch (action.type) {
    case POKEMON_LIST.REQUEST:
      return [];
    case POKEMON_LIST.SUCCESS:
      return action.payload;
    default:
      return pokemons
  }
};
