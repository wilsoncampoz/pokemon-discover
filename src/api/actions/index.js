
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
};

export const POKEMON_LIST = createRequestTypes('POKEMON_LIST');
export const POKEMON_DETAIL = createRequestTypes('POKEMON_DETAIL');
export const UPDATE_NAVIGATION =  'UPDATE_NAVIGATION';
export const UPDATE_ITEMS_PER_PAGE =  'UPDATE_ITEMS_PER_PAGE';

function action(type, payload = {}) {
  return { type, ...payload }
};

export const pokemons = {
  request: params => action(POKEMON_LIST[REQUEST], { payload: params }),
  success: payload => action(POKEMON_LIST[SUCCESS], { payload }),
  failure: (error) => action(POKEMON_LIST[FAILURE], { error }),
};

export const detail = {
  request: params => action(POKEMON_DETAIL[REQUEST], { payload: params }),
  success: payload => action(POKEMON_DETAIL[SUCCESS], { payload }),
  failure: (error) => action(POKEMON_DETAIL[FAILURE], { error }),
};

export const updateNavigation = payload => action(UPDATE_NAVIGATION, { payload });
