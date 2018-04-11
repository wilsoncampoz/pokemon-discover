import { take, put, call, fork, takeEvery, all, select } from 'redux-saga/effects';
import * as actions from '../actions';
import { fetchPokemons } from '../services';

function handlePokemonResponse(items){
  items.forEach(item => item.id = RegExp(/pokemon\/([0-9]+)/).exec(item.url)[1]);
  return items;
}

export function* getPokemons() {
    try {
      let { results, count, previous, next } = yield call(fetchPokemons);
      let pokemons = handlePokemonResponse(results);
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
  while(true) {
    yield take(actions.LOAD_POKEMON_LIST)
    /*
      ***THIS IS A BLOCKING CALL***
      It means that watchCheckout will ignore any CHECKOUT_REQUEST event until
      the current checkout completes, either by success or by Error.
      i.e. concurrent CHECKOUT_REQUEST are not allowed
      TODO: This needs to be enforced by the UI (disable checkout button)
    */
    yield call(getPokemons)
  }
}

export function* watchGetDetail() {
  /*
    takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
    i.e. concurrent GET_ALL_PRODUCTS actions are allowed
  */
  yield takeEvery(actions.LOAD_POKEMON_DETAIL, getDetail)
}

export default function* root() {
  yield all([
    fork(watchGetPokemons),
    fork(watchGetDetail)
  ])
}
