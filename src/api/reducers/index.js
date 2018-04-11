import { combineReducers } from 'redux';
import pokemons from './pokemons'
import detail from './detail'
import navigation from './navigation'

export default combineReducers({ pokemons, detail, navigation });