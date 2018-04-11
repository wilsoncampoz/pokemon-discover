
const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

export const POKEMON_LIST = createRequestTypes('POKEMON_LIST')
export const POKEMON_DETAIL = createRequestTypes('POKEMON_DETAIL')

export const UPDATE_ROUTER_STATE = 'UPDATE_ROUTER_STATE'
export const UPDATE_NAVIGATION =  'UPDATE_NAVIGATION'
export const LOAD_POKEMON_LIST = 'LOAD_POKEMON_LIST'
export const LOAD_POKEMON_DETAIL = 'LOAD_POKEMON_DETAIL'

function action(type, payload = {}) {
  return { type, ...payload }
}

export const pokemons = {
  request: () => action(POKEMON_LIST[REQUEST]),
  success: payload => action(POKEMON_LIST[SUCCESS], { payload }),
  failure: (error) => action(POKEMON_LIST[FAILURE], { error }),
}

export const detail = {
  request: id => action(POKEMON_DETAIL[REQUEST], { id }),
  success: payload => action(POKEMON_DETAIL[SUCCESS], { payload }),
  failure: (error) => action(POKEMON_DETAIL[FAILURE], { error }),
}

export const updateNavigation = payload => action(UPDATE_NAVIGATION, { payload })
export const loadPokemons = () => action(LOAD_POKEMON_LIST)
export const loadPokemonDetail = id => action(LOAD_POKEMON_DETAIL, { id })
