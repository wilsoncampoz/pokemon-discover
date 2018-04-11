const API_ROOT = 'https://pokeapi.co/api/v2/pokemon/'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.

function callApi(params = '') {
  return fetch(`${API_ROOT}${params}`)
    .then(response => response.json());
}

// api services

export const fetchPokemons = params => callApi(params)
