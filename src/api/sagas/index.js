import { put, call, fork, takeEvery, all } from 'redux-saga/effects';

import * as actions from '../actions';
import { fetchPokemons } from '../services';

function handlePokemonsResponse(items){
  items.forEach(item => item.id = RegExp(/pokemon\/([0-9]+)/).exec(item.url)[1]);
  return items;
}

function getParam(param){
  let key = param.split("=")[0];
  let value = param.split("=")[1];
  return { [key]: value };
}

function getPaginationContext(url){
  let params = url && url.split('?')[1];
  return params && params.split("&").reduce((obj, param) => Object.assign(obj, getParam(param)), {});
}

export function* getPokemons({ payload }) {
    try {
      let { results, count, previous, next } = yield call(fetchPokemons, payload);
      let pokemons = handlePokemonsResponse(results);
      
      previous = getPaginationContext(previous);
      next = getPaginationContext(next);
      
      yield put(actions.pokemons.success(pokemons))
      yield put(actions.updateNavigation({ count, previous, next }))
    } catch(error) {
      yield put(actions.pokemons.failure(error))
    }
}

export function* getDetail({ payload }) {
    try {
      let detail = yield call(fetchPokemons, payload);
      yield put(actions.detail.success(detail))
    } catch(error) {
      yield put(actions.detail.failure(error))
    }
}

export function* watchGetPokemons() {
  yield takeEvery(actions.POKEMON_LIST.REQUEST, getPokemons);
}

export function* watchGetDetail() {
  yield takeEvery(actions.POKEMON_DETAIL.REQUEST, getDetail);
}

export default function* root() {
  yield all([
    fork(watchGetPokemons),
    fork(watchGetDetail)
  ]);
}
