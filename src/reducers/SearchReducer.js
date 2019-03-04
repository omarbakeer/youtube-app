import { HANDLE_SEARCH_INPUT, SUBMIT_SEARCH_REQUEST } from '../actions'

const initState = {
  input: '',
  results: []
}

const SearchReducer = (state = initState, action) => {
  switch (action.type) {
    case HANDLE_SEARCH_INPUT:
      return {
        ...state,
        input: action.payload
      }
    case SUBMIT_SEARCH_REQUEST:
      return {
        ...state,
        results: action.searchResult
      }
    default:
      return state
  }
}

export default SearchReducer
